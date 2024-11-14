import p5 from "p5";

/// First sketch
let sketch = (p) => {
  let a = 10;
  let speed = 6;

  p.setup = () => {
    p.createCanvas(p.windowWidth * 0.5, p.windowHeight * 0.7);
  
    p.textSize(p.width * 0.1); // Dynamic text size
    p.strokeWeight(p.width * 0.5); // Dynamic stroke weight
    p.textAlign(p.CENTER, p.CENTER);
    p.noFill();
  };

  p.draw = () => {
    p.background(150);
    let textString = "Thank You";
    let textX = p.width / 1.5;
    let textY = a;
    for (let i = 0; i < textString.length; i++) {
      let letter = textString.charAt(i);
      p.fill(255, 204, 0);
      p.text(letter, textX, textY);
      textY += p.textSize();
    }

    if (a >= p.height - p.textSize()) {
      speed = -5;
    }
    if (a <= 0) {
      speed = 3;
    }
    a = a + speed;
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth * 0.5, p.windowHeight * 0.8);
    p.textSize(p.width * 0.1);
    p.strokeWeight(p.width * 0.005);
  };
};

new p5(sketch);

// Second sketch

// Second sketch
let sketch2 = (p) => {
  let b;

  p.setup = function () {
    p.createCanvas(p.windowWidth * 0.8, p.windowHeight * 0.25);
    b = p.height / 2;
    p.stroke(255); // Set line color explicitly
    p.strokeWeight(p.width * 0.005); // Dynamic stroke weight for the line
    p.fill(255, 125, 0);
    p.textSize(p.width * 0.05); // Dynamic text size
    p.textAlign(p.CENTER, p.CENTER);
  };

  p.draw = function () {
    p.background(10);
    p.stroke(255); // Re-apply line color here in case it's reset
    p.line(0, b, p.width, b); // Draw moving line
    b = b - 0.5;
    if (b < 0) {
      b = p.height;
    }
    p.fill(255, 125, 0); // Set text color
    p.text("together, we are going all the way up!", p.width / 2, p.height / 2);
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth * 0.8, p.windowHeight * 0.25);
    p.strokeWeight(p.width * 0.005);
    p.textSize(p.width * 0.05);
  };
};

new p5(sketch2);


// import p5 from "p5";

// let sketch = (p) => {
//   let a = 10;
//   let speed = 6;

//   p.setup = () => {
//     let canvas = p.createCanvas(p.windowWidth * 0.25, p.windowHeight * 0.25);
//     canvas.position(p.windowWidth * 0.75, 0);
//     p.stroke(0);
//     p.strokeWeight(3);
//     p.noFill();
//     p.textSize(28);
//   };

//   p.draw = () => {
//     p.background(150);
//     p.text("T h a n k   Y o u !", p.width / 2, a, 245, 65);
//     if (a >= p.height - 50) {
//       speed = -5;
//     }
//     if (a <= 0) {
//       speed = 8;
//     }
//     a = a + speed;
//   };
// };

// new p5(sketch);
