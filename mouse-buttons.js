let size = 20;

function draw() {
  ellipse(width / 2, height / 2, size);
}

function mouseClicked() {
  size = size + 10;
}
