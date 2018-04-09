const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProd = process.argv.indexOf('-p') !== -1;

let pluginList = [
	new CopyWebpackPlugin([
		{ from: 'src/index.html', to: 'index.html' },
		{ from: 'src/assets', to: 'assets' },
		{ from: 'src/js', to: 'js' }
	])
];

if (isProd) {
	const prodPlugins = [
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			compress: {
				warnings: false,
				screw_ie8: true,
				conditionals: true,
				unused: true,
				comparisons: true,
				sequences: true,
				dead_code: true,
				evaluate: true,
				if_return: true,
				join_vars: true
			},
			output: {
				comments: false
			}
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false
		})
	];
	pluginList = pluginList.concat(prodPlugins);
}

module.exports = {
	devtool: "source-map",
	entry: {
		main: ['@babel/polyfill',
			__dirname + '/src/js/app.js'],
	},
	output: {
		path: __dirname + '/dist/',
		publicPath: '/',
		filename: 'js/app.js'
	},
	devServer: {
		inline: true,
		hot: true,
		port: 3333
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loader: "style-loader!css-loader!sass-loader"
			}
		]
	},
	resolve: {
		extensions: ['.js']
	},
	plugins: pluginList
}
