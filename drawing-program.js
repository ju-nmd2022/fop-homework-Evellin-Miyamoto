let lastX = 0;
let lastY = 0;

background(255, 255, 255);
function draw() {
  strokeWeight(8);
  stroke((mouseX / width) * 255, 0, (mouseY / height) * 255);
  line(lastX, lastY, mouseX, mouseY);

  lastX = mouseX;
  lastY = mouseY;
}
