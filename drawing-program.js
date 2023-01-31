let lastMouseX = 0;
let lastMouseY = 0;

background(255, 255, 255);
function draw() {
  strokeWeight(8);
  if (mouseIsPressed) {
    if (mouseIsActive) {
      line(mouseX, mouseY, lastMouseX, lastMouseY);
    }

    lastMouseX = mouseX;
    lastMouseY = mouseY;
    mouseIsActive = true;
  } else {
    mouseIsActive = false;
  }
}
