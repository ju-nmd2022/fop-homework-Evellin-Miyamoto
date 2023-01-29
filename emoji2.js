let x = 100;
let y = 100;
let s = 0.8;

background(255, 255, 255);

function emoji(x, y, s) {
  //head
  fill(255, 255, 0);
  ellipse(x, y, 200 * s);

  //eyes
  fill(0, 0, 0);
  ellipse(x - 40 * s, y - 30 * s, 20 * s, 20 * s);
  ellipse(x + 40 * s, y - 30 * s, 20 * s, 20 * s);

  //mouth
  strokeWeight(2);
  line(x - 30 * s, y + 30 * s, x + 30 * s, y + 30 * s);
}

emoji(100, 100, s);
emoji(200, 200, s);
emoji(400, 50, s);

let emojiRotation = 0;
function draw() {
  background(255, 255, 255);
  push();
  translate(x, 150);
  rotate(emojiRotation);
  //   emoji(150, y, 2.0);
  emoji(0, 0, s);
  pop();
  //   y = y + 2;
  //   x = x + 4;
  s = s + 0.005;
  emojiRotation = emojiRotation + 0.1;
}
