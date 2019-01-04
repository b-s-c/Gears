var angle = 0;

var gear = {
    x: 100,
    y: 100,
}

function setup() {
  createCanvas(windowWidth, windowHeight);
    frameRate(165)
}

function draw() {
  background(100); // Drawn here so that the gear doesn't leave a trail behind
  ellipse(mouseX, mouseY, 100, 100); // Draw the main circle
  ellipse(gear1.x, gear1.y, 100, 100);
  fill(230, 220, 100); // Set gear colour
  noStroke(); // Ensure that the teeth don't have an outline
  for (var i = 0; i < 360; i += 30) { // Draw a tooth on the gear 12 times (360/30) 
    push(); 
    // push(); and pop(); ensure that we return to the "top" of the gear before going to draw our next gear. Otherwise, we will keep incrementing stuff we don't want to
    translate(mouseX, mouseY); // Ensures that the teeth move with the gear
    rotate(radians(angle + i)); // Ensures that the teeth are drawn all around the gear (while also rotating the gear)
    quad(-5, -60, 5, -60, 8, -49, -8, -49); // The drawing of the tooth (trapezium-shaped)
    pop(); // See push();
  }
  angle +=.3; // Adjust how fast the gear should spin
}