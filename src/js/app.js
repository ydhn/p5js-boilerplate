import p5 from 'p5';
import '../css/style.scss';

const sketch = p => {
  let canvas;

  p.preload = () => {
  };

  p.setup = () => {
    canvas = p.createCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = () => {
    if (p.mouseIsPressed) {
      p.fill(0);
    } else {
      p.fill(255);
    }
    p.ellipse(p.mouseX, p.mouseY, 80, 80);
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch);