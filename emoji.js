/* This is the emoji created 
for fundamentals of programming.
Jönköping University*/

push();
translate(100, 100);
background(255, 255, 255);
noStroke();

//face
fill(255, 255, 0);
ellipse(200, 200, 200, 200);

//left eye
fill(0, 0, 0);
beginShape();
vertex(140, 180);
bezierVertex(140, 140, 180, 140, 180, 180);
bezierVertex(180, 160, 140, 160, 140, 180);
endShape();

//right eye
fill(0, 0, 0);
beginShape();
vertex(220, 180);
bezierVertex(220, 140, 260, 140, 260, 180);
bezierVertex(260, 160, 220, 160, 220, 180);
endShape();

//mouth
fill(0, 0, 0);
ellipse(200, 225, 40, 20);
ellipse(200, 235, 40, 20);
fill(255, 255, 0);
ellipse(190, 225, 40, 20);
ellipse(190, 235, 40, 20);
pop();
