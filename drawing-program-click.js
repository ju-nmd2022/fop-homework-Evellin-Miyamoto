let lastX = width / 2;
let lastY = height / 2;

background(255, 255, 255);
function mouseClicked() {
  line(lastX, lastY, mouseX, mouseY);
  lastX = mouseX;
  lastY = mouseY;
}
