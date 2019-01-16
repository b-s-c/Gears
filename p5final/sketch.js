// Customisable gears

// var angle = 0 // This needs to be global, since gears can't move at different rates

class Gear{
   constructor(angle, x, y, colR, colG, colB, alpha, speed, direction, angleoffset, teethshape, toothheight, toothwidth, toothoffset, teethamount, diameter){
      this.angle = angle;
      this.x = x;
      this.y = y;
      this.colR = colR;
      this.colG = colG;
      this.colB = colB;
      this.alpha = alpha
      this.speed = speed;
      this.direction = direction; // 1 (clockwise) or -1 (counter-clockwise)
      this.angleoffset = angleoffset; // Angle offset, to interlock with neighbouring gears
      this.teethshape = teethshape;
      this.toothheight = toothheight;
      this.toothwidth = toothwidth;
      this.toothoffset = toothoffset;
      this.teethamount = teethamount;
      this.diameter = diameter;
   }
   draw(){
      fill(this.colR, this.colG, this.colB, this.alpha); // Set gear colour    
      ellipse(this.x, this.y, this.diameter, this.diameter); // Draw the main circle
      fill(0, 0, 0, this.alpha); // Set colour to black
      ellipse(this.x, this.y, 20, 20);
      fill(this.colR, this.colG, this.colB, this.alpha); // Set tooth colour 
      noStroke(); // Ensure that the teeth don't have an outline
      for (var i = 0; i < 360; i += 360/this.teethamount) { // Draw a tooth on the gear a given number of times 
        push(); // push(); and pop(); ensure that we return to the "top" of the gear before going to draw our next gear. Otherwise, we will keep incrementing stuff we don't want to
        translate(this.x, this.y); // Ensures that the teeth move with the gear
        rotate(radians((this.angle + i + this.angleoffset) * this.direction)); // Ensures that the teeth are drawn all around the gear (i is the location ON the gear, speed is the speed that the gear is rotating)
        
        if (this.teethshape == "tra" || this.teethshape == "tri"){
          // If we're here, then this.teethshape is valid. Therefore, we can measure out how to draw the teeth
          let yLO = -(this.diameter/2) + this.toothoffset; // toothoffset for making sure there's no gap between the circle and tooth
          let yHI = yLO - this.toothheight;
          let xHI = this.toothwidth/2;
          
          if (this.teethshape == "tra") {
          let xLO = xHI * (5/8); // (5/8) keeps the trapezium shape scale true to the original sketch
          quad(-xLO, yHI, xLO, yHI, xHI, yLO, -xHI, yLO); // The drawing of the tooth
          } else if (this.teethshape == "tri") {
          let xLO = 0
          triangle(-xHI, yLO, xHI, yLO, xLO, yHI);
          } 
        } else {
          pop(); //See push();
          this.invalidShape();
        }

        pop(); //See push();
      }
      this.angle += this.speed; // Adjust how fast the gear should spin
      this.angle = this.angle % 360;
   }
   invalidShape(){ // This needs to be here, since it's a parameter that could easily cause an error
      fill(255);
      text("Invalid value passed to teethshape; please consult the documentation.", mouseX, mouseY);
   }
   getangle(){
   	  this.angle += this.speed;
   	  return this.angle % 360;
   }
}

// TODO
// separate example and core .js files
// make a nice example sketch
// button to add gears (and remove them - so possibly left click right click)
// sparks!
// probably more stuff too
