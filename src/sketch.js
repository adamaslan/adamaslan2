import p5 from "p5";

// First sketch
let sketch = (p) => {
  let a = 10;
  let speed = 6;

  p.setup = () => {
    let canvas = p.createCanvas(p.windowWidth * 0.1, p.windowHeight);
    canvas.center();
    p.stroke(0);
    p.strokeWeight(3);
    p.noFill();
    p.textSize(28);
  };

  p.draw = () => {
    p.background(150);
    let textString = "T h a n k   Y o u !";
    let textX = p.width / 2;
    let textY = a;
    for (let i = 0; i < textString.length; i++) {
      let letter = textString.charAt(i);
      p.fill(255, 204, 0);
      p.text(letter, textX, textY);
      textY += p.textSize();
    }
    if (a >= p.height - 50) {
      speed = -5;
    }
    if (a <= 0) {
      speed = 8;
    }
    a = a + speed;
  };
};

new p5(sketch);

// Second sketch
let sketch2 = (p) => {
  let b;

  p.setup = function () {
    let canvas = p.createCanvas(p.windowWidth * 0.25, p.windowHeight * 0.25);
    canvas.position(p.windowWidth * 0.6, p.windowHeight * 0.75);
    p.stroke(255);
    b = p.height / 2;
    p.textAlign(p.CENTER, p.CENTER);
    p.fill(255, 125, 0);
    p.textSize(20);
  };

  p.draw = function () {
    p.background(10);
    p.line(0, b, p.width, b);
    b = b - 0.5;
    if (b < 0) {
      b = p.height;
    }
    p.text("together, we are going all the way up!", p.width / 2, p.height / 2);
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
