import p5 from 'p5';
import '../css/style.scss';

const sketch = p => {
  let canvas;
  let logo;
  let logoWidth = 250;
  let logoHeight = 114;

  p.preload = () => {
    logo = p.loadImage("assets/p5js.svg");
  };

  p.setup = () => {
    canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    p.ellipseMode(p.CENTER);
    //p.image(logo, p.windowWidth/2 - logoWidth/2, p.windowHeight/2 - logoHeight/2);
  };

  p.draw = () => {
    const rects = [
      { x: 10, y: 10, width: 20, height: 20 },
      { x: 70, y: 15, width: 50, height: 55 },
      { x: 15, y: 15, width: 10, height: 10 },
      { x: 125, y: 25, width: 20, height: 20 },
      { x: 60, y: 65, width: 20, height: 20 },
    ];
    p.noFill();
    const circles_x = [1, 2, 3, 4, 5].map((i) => -70 + i * 180);
    rects.map((rect) => p.rect(rect.x*5, rect.y*5, rect.width*5, rect.height*5));
    p.line((rects[0].x + rects[0].width) * 5, (rects[0].y + rects[0].height) * 5,
      circles_x[1], 505);
    p.fill(255, 255, 255);
    circles_x.map((x) => p.ellipse(x, 505, 20, 20));
    p.line(10 * 5, 55 * 5, 10 * 5, 65 * 5);
    p.line(100 * 5, 5 * 5, 125 * 5, 5 * 5);
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    //p.image(logo, p.windowWidth/2 - logoWidth/2, p.windowHeight/2 - logoHeight/2);
  };

  p.keyPressed = () => {
  };

};

new p5(sketch);