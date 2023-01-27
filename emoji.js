/* This is the emoji created 
for fundamentals of programming.
Jönköping University*/

let greeting = "Hello!";
let x = 100;
let y = 50;

function emoji(x, y, s) {
  strokeWeight = 2 * s;

  push();
  translate(x, x);
  // rotate(-0.3);
  background(x + x + y + 5, x + x + y + 5, x + x + y + 5);
  noStroke();

  //face
  fill(x + x + y + 5, x + x + y + 5, 0);
  ellipse(x + x, x + x, x + x, x + x * s);

  //left eye
  fill(0, 0, 0);
  beginShape();
  vertex(x + y - 10 * s, x + y + 30 * s);
  bezierVertex(
    x + y - 10,
    x + y - 10,
    x + y + 30,
    x + y - 10,
    x + y + 30,
    x + y + 30
  );
  bezierVertex(x + y + 30, 160, x + y - 10, 160, x + y - 10, x + y + 30);
  endShape();

  //right eye
  fill(0, 0, 0);
  beginShape();
  vertex(x + x + y - 30, x + y + 30);
  bezierVertex(
    x + x + y - 30,
    x + y - 10,
    x + x + y + 10,
    x + y - 10,
    x + x + y + 10,
    x + y + 30
  );
  bezierVertex(
    x + x + y + 10,
    160,
    x + x + y - 30,
    160,
    x + x + y - 30,
    x + y + 30
  );
  endShape();

  //mouth
  fill(0, 0, 0);
  ellipse(x + x, x + x + 25, y - 10, y - 30);
  ellipse(x + x, x + x + 35, y - 10, y - 30);
  fill(x + x + y + 5, x + x + y + 5, 0);
  ellipse(x + x - 10, x + x + 25, y - 10, y - 30);
  ellipse(x + x - 10, 235, y - 10, y - 30);

  //greeting
  scale(1.5);
  fill(x + x + 29, x + 7, x + 11);
  rect(5, y + 20, x - 20, y - 30, y - 30);
  triangle(y + 8, x - 15, x - 30, 100, x - 30, y + 37);
  fill(0, 0, 0);
  text(greeting, y - 20, x - 15);
  pop();
}

emoji(100, 50, 1.0);

// function draw() {
//   emoji(x, 50);
//   x = x + 2;
// }
