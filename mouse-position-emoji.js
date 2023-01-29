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

function draw() {
  clear();
  emoji(width / 2, height / 2, Math.max(0.1, (mouseX / width) * 2));
}
