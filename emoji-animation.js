// let x = 100;
let y = 100;

background(255, 255, 255);

function emoji(x, y) {
  //head
  fill(255, 255, 0);
  ellipse(x, y, 200);

  //eyes
  fill(0, 0, 0);
  ellipse(x - 40, y - 30, 20, 20);
  ellipse(x + 40, y - 30, 20, 20);

  //mouth
  strokeWeight(2);
  line(x - 30, y + 30, x + 30, y + 30);
}

let x = -150;
let direction = "forward";

function draw() {
  background(255, 255, 255);
  emoji(x, 150);

  if (direction === "forward") {
    if (x < 300) {
      x = x + 5;
    } else {
      direction = "backwards";
    }
  } else if (direction === "backwards") {
    if (x > 0) {
      x = x - 5;
    } else {
      direction = "forward";
    }
  }
}
