import p5 from 'p5';
import '../css/style.scss';

const sketch = p => {
  let canvas;
  let logo;
  let world;
  let boxes = [];
  let hand;

  class Hand {
    constructor(x, y) {
      this.w = 300;
      this.h = 100;

      this.image = p.loadImage("assets/hand.png");

      // Define a body
      let bd = new box2d.b2BodyDef();
      bd.type = box2d.b2BodyType.b2_staticBody;
      bd.position = scaleToWorld(x, y);

      // Define a fixture
      let fd = new box2d.b2FixtureDef();
      // Fixture holds shape
      fd.shape = new box2d.b2PolygonShape();
      fd.shape.SetAsBox(scaleToWorld(this.w / 2), scaleToWorld(this.h / 2));

      // Some physics
      fd.density = 1.0;
      fd.friction = 0.5;
      fd.restitution = 0.2;

      // Create the body
      this.body = world.CreateBody(bd);
      // Attach the fixture
      this.body.CreateFixture(fd);
    }

    move(x, y) {
      this.body.SetPosition(scaleToWorld(x, y));
    }

    // Drawing the box
    display() {
      // Get the body's position
      let pos = scaleToPixels(this.body.GetPosition());
      // Get its angle of rotation
      let a = this.body.GetAngleRadians();

      // Draw it!
      p.imageMode(p.CENTER);
      p.push();
      p.translate(pos.x, pos.y);
      p.rotate(a);
      p.image(this.image, 0, -10, this.w, this.h);
      p.pop();
    }
  }

  class Box {
    constructor(x, y) {
      this.w = 16;
      this.h = 16;

      // Define a body
      let bd = new box2d.b2BodyDef();
      bd.type = box2d.b2BodyType.b2_dynamicBody;
      bd.position = scaleToWorld(x, y);

      // Define a fixture
      let fd = new box2d.b2FixtureDef();
      // Fixture holds shape
      fd.shape = new box2d.b2PolygonShape();
      fd.shape.SetAsBox(scaleToWorld(this.w / 2), scaleToWorld(this.h / 2));

      // Some physics
      fd.density = 1.0;
      fd.friction = 0.5;
      fd.restitution = 0.2;

      // Create the body
      this.body = world.CreateBody(bd);
      // Attach the fixture
      this.body.CreateFixture(fd);
    }

    // Drawing the box
    display() {
      // Get the body's position
      let pos = scaleToPixels(this.body.GetPosition());
      // Get its angle of rotation
      let a = this.body.GetAngleRadians();

      // Draw it!
      p.rectMode(p.CENTER);
      p.push();
      p.translate(pos.x, pos.y);
      p.rotate(a);
      p.fill('#16BBD2');
      p.noStroke();
      p.rect(0, 0, this.w, this.h);
      p.pop();
    }
  }

  p.preload = () => {
  };

  p.setup = () => {
    canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    world = window.createWorld(new window.box2d.b2Vec2(0, 0));
    hand = new Hand(p.windowWidth / 2, p.windowHeight / 4 * 3);
  };

  p.draw = () => {
    let timeStep = 1.0 / 30;
    p.background(0);
    // 2nd and 3rd arguments are velocity and position iterations
    world.Step(timeStep, 10, 10);

    hand.move(p.mouseX, p.windowHeight / 4 * 3);
    hand.display();
    let b = new Box(p.windowWidth / 2, p.windowHeight / 3);
    boxes.push(b);
    if (boxes.length > 200) boxes = boxes.splice(1);

    // Display all the boxes
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].display();
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.keyPressed = () => {
  };

  p.mousePressed = () => {
  }
};

new p5(sketch);