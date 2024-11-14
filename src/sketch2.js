import p5 from "p5";

let sketch = (p) => {
  let shapes = [];
  const shapeTypes = ["circle", "football", "basketball", "square", "triangle"];

  p.setup = () => {
    // Create a responsive canvas and set it to the background layer
    let canvas = p.createCanvas(p.windowWidth * 0.75, p.windowHeight * 0.75);
    canvas.position(p.windowWidth * 0.125, p.windowHeight * 0.125);
    canvas.style("z-index", "-1"); // Set z-index to -1 to place it in the background
    p.noStroke();
  };

  p.windowResized = () => {
    // Make canvas responsive
    p.resizeCanvas(p.windowWidth * 0.75, p.windowHeight * 0.75);
  };

  p.draw = () => {
    p.background(255); // White background

    // Spawn a new shape occasionally
    if (p.frameCount % 10 === 0) {
      shapes.push(new FallingShape());
    }

    // Update and display each shape
    for (let i = shapes.length - 1; i >= 0; i--) {
      shapes[i].update();
      shapes[i].display();

      // Remove shapes that fall beyond the canvas
      if (shapes[i].y > p.height) {
        shapes.splice(i, 1);
      }
    }
  };

  class FallingShape {
    constructor() {
      // Randomize properties for each shape
      this.x = p.random(p.width);
      this.y = -50;
      this.size = p.random(20, 50);
      this.color = p.color(p.random(255), p.random(255), p.random(255));
      this.speed = p.random(2, 5);
      this.type = p.random(shapeTypes);
    }

    update() {
      // Move the shape downwards
      this.y += this.speed;
    }

    display() {
      p.fill(this.color);

      // Draw different shapes based on the type
      if (this.type === "circle") {
        p.ellipse(this.x, this.y, this.size, this.size);
      } else if (this.type === "football") {
        p.ellipse(this.x, this.y, this.size * 1.5, this.size); // Ellipse shape
      } else if (this.type === "basketball") {
        p.ellipse(this.x, this.y, this.size, this.size); // Just use a circle but different color
      } else if (this.type === "square") {
        p.rect(this.x, this.y, this.size, this.size);
      } else if (this.type === "triangle") {
        p.triangle(
          this.x,
          this.y - this.size / 2,
          this.x - this.size / 2,
          this.y + this.size / 2,
          this.x + this.size / 2,
          this.y + this.size / 2
        );
      }
    }
  }
};

new p5(sketch);


// import p5 from "p5";

// let sketch2 = (p) => {
//   let a;

//   p.setup = function () {
//     let canvas = p.createCanvas(p.windowWidth * 0.25, p.windowHeight * 0.25);
//     canvas.position(p.windowWidth * 0.75, 0);
//     p.stroke(255);
//     a = p.height / 2;
//   };

//   p.draw = function () {
//     p.background(51);
//     p.line(0, a, p.width, a);
//     a = a - 0.5;
//     if (a < 0) {
//       a = p.height;
//     }
//   };
// };

// new p5(sketch2);
