let x = 100;
let y = 100;
let s = 0.8;

background(255, 255, 255);

function emoji(x, y, s, eyesAreClosed) {
  // let eyesAreClosed = true;

  //head
  fill(255, 255, 0);
  ellipse(x, y, 200 * s);

  if (eyesAreClosed) {
    fill(0, 0, 0);
    ellipse(x - 40 * s, y - 30 * s, 40 * s, 3 * s);
    ellipse(x + 40 * s, y - 30 * s, 40 * s, 3 * s);
  } else {
    //eyes
    fill(0, 0, 0);
    ellipse(x - 40 * s, y - 30 * s, 20 * s, 20 * s);
    ellipse(x + 40 * s, y - 30 * s, 20 * s, 20 * s);
  }

  //mouth
  strokeWeight(2);
  line(x - 30 * s, y + 30 * s, x + 30 * s, y + 30 * s);
}

function draw() {
  background(255, 255, 255);
  //   if (mouseIsPressed === true) {
  //     emoji(150, 150, s, true);
  //   } else {
  //     emoji(150, 150, s, false);
  //   }
  emoji(150, 150, s, mouseIsPressed);
}
