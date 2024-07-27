import p5 from "p5";

let sketch = (p) => {
  let x = 100;
  let speed = 2;

  p.setup = () => {
    let canvas = p.createCanvas(p.windowWidth * 0.25, p.windowHeight * 0.25);
    canvas.position(p.windowWidth * 0.75, 0);
    p.noStroke();
  };

  p.draw = () => {
    p.background(255); // White background
    p.fill(0); // Black color for the ball
    p.ellipse(x, p.height / 2, 50, 50); // Draw the ball

    if (x > p.width || x < 0) {
      speed = -speed; // Change direction when the ball hits the edge
    }
    x = x + speed; // Update the position of the ball
  };
};

new p5(sketch);
