function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
}

function draw() {
  background(100); // Drawn here so that the gear doesn't leave a trail behind
  let speed = 1
  let toothheightmodifier = 0 // Default toothheight is 10, for reference (so putting -7 here would make the teeth 3 high)
  let g = new Gear(mouseX, mouseY, 100, 120, 130, speed, 1, 0, toothheightmodifier);
  g.draw();
  let g2 = new Gear(mouseX+100+10+toothheightmodifier, mouseY, 139, 0, 0, speed, -1, 15, toothheightmodifier); // mouseY-100-11 for vertically above, mouseX+100+11 for horizontally right
  g2.draw();
}

var angle = 0 // This needs to be global, since gears can't move at different rates

class Gear{
   constructor(x, y, colR, colG, colB, speed, direction, offset, toothheight){
      this.x = x;
      this.y = y;
      this.colR = colR;
      this.colG = colG;
      this.colB = colB;
      this.speed = speed;
      this.direction = direction; // 1 (clockwise) or -1 (counter-clockwise)
      this.offset = offset // Angle offset, to interlock with neighbouring gears
      this.toothheight = toothheight
   }
   draw(){
      fill(this.colR, this.colG, this.colB); // Set gear colour    
      ellipse(this.x, this.y, 100, 100); // Draw the main circle
      fill(0); // Set colour to black
      ellipse(this.x, this.y, 20, 20);
      fill(this.colR, this.colG, this.colB); // Set tooth colour 
      noStroke(); // Ensure that the teeth don't have an outline
      for (var i = 0; i < 360; i += 30) { // Draw a tooth on the gear 12 times (360/30) 
        push(); // push(); and pop(); ensure that we return to the "top" of the gear before going to draw our next gear. Otherwise, we will keep incrementing stuff we don't want to
        translate(this.x, this.y); // Ensures that the teeth move with the gear
        rotate(radians((angle + i + this.offset) * this.direction)); // Ensures that the teeth are drawn all around the gear (i is the location ON the gear, speed is the speed that the gear is rotating)
        quad(-5, -60-this.toothheight, 5, -60-this.toothheight, 8, -50, -8, -50); // The drawing of the tooth (trapezium-shaped)
        pop(); // See push();
      }
      angle += this.speed; // Adjust how fast the gear should spin
      angle = angle % 360;
      print(angle);
   }
}

// TODO: 
// make the teeth fit into each other nicely
//    take the diameter of the circle and calculate width of trapezium based on it
//    shift the position of the gears to make them fit (use maths)