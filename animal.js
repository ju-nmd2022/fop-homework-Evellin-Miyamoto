background(255, 255, 255);
scale(1.5);
translate(100, 100);

//ears
triangle(65, 65, 85, 52, 65, 35);
triangle(135, 65, 115, 52, 138, 35);

//face
ellipse(100, 100, 100, 100);

//eyes
fill(0, 0, 0);
ellipse(80, 90, 10);
ellipse(120, 90, 10);

//nose
triangle(95, 115, 105, 115, 100, 120);

//right whiskers
line(135, 100, 115, 110);
line(115, 115, 135, 115);
line(135, 130, 115, 120);

//left whiskers
line(65, 100, 85, 110);
line(65, 115, 85, 115);
line(65, 130, 85, 120);
