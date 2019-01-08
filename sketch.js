// Customisable gears

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60); // High refresh rates like 144 and 165 break the motion slightly, but they're not recommended anyway

  //toothSlider
  toothSlider = createSlider(0, 100, 10, 1);
  toothSlider.position(10, 10);
  toothSlider.style('width', '300px');

  //speedSlider
  speedSlider = createSlider(0, 5, 1, 0.1);
  speedSlider.position(10, 50);
  speedSlider.style('width', '300px');

  //g2sizeSlider
  g2sizeSlider = createSlider(10, 250, 100, 1);
  g2sizeSlider.position(10, 90);
  g2sizeSlider.style('width', '300px');
}

function draw() {
  background(100); // Drawn here so that the gear doesn't leave a trail behind
  
  // Text setup
  fill(0);
  textSize(21);

  // tooth height
  let toothheight = toothSlider.value() // Default toothheight is 10
  text("Tooth height: " + toothheight, toothSlider.x * 2 + toothSlider.width, toothSlider.y + 16);

  // speed
  // let speed = 0; // very useful for testing
  let speed = speedSlider.value();
  text("Speed: " + speed, speedSlider.x * 2 + speedSlider.width, speedSlider.y + 16);
  
  // g2size
  let g2size = g2sizeSlider.value()
  text("Diameter of g2: " + g2size, g2sizeSlider.x * 2 + g2sizeSlider.width, g2sizeSlider.y + 16);

  // g (Gear no. 1)
  let g = new Gear(mouseX, mouseY, 100, 120, 130, speed, 1, 0, toothheight, 200);
  g.draw();

  // print(g.x) // How to get a parameter (example for quick reference)
  
  // g2 (Gear no.2)
  let g2 = new Gear(mouseX + g.diameter/2 + g2size/2 + toothheight, mouseY, 139, 0, 0, speed, -1, 15, toothheight, g2size); // mouseY-100-11 for vertically above, mouseX+100+11 for horizontally right
  g2.draw();
}

var angle = 0 // This needs to be global, since gears can't move at different rates

class Gear{
   constructor(x, y, colR, colG, colB, speed, direction, offset, toothheight, diameter){
      this.x = x;
      this.y = y;
      this.colR = colR;
      this.colG = colG;
      this.colB = colB;
      this.speed = speed;
      this.direction = direction; // 1 (clockwise) or -1 (counter-clockwise)
      this.offset = offset; // Angle offset, to interlock with neighbouring gears
      this.toothheight = toothheight;
      this.diameter = diameter;
   }
   draw(){
      fill(this.colR, this.colG, this.colB); // Set gear colour    
      ellipse(this.x, this.y, this.diameter, this.diameter); // Draw the main circle
      fill(0); // Set colour to black
      ellipse(this.x, this.y, 20, 20);
      fill(this.colR, this.colG, this.colB); // Set tooth colour 
      noStroke(); // Ensure that the teeth don't have an outline
      for (var i = 0; i < 360; i += 30) { // Draw a tooth on the gear 12 times (360/30) 
        push(); // push(); and pop(); ensure that we return to the "top" of the gear before going to draw our next gear. Otherwise, we will keep incrementing stuff we don't want to
        translate(this.x, this.y); // Ensures that the teeth move with the gear
        rotate(radians((angle + i + this.offset) * this.direction)); // Ensures that the teeth are drawn all around the gear (i is the location ON the gear, speed is the speed that the gear is rotating)
        
        let loY = -(this.diameter/2) + 1;
        let hiY = loY - this.toothheight;
        quad(-5, hiY, 5, hiY, 8, loY, -8, loY); // The drawing of the tooth (trapezium-shaped)

        pop(); // See push();
      }
      angle += this.speed; // Adjust how fast the gear should spin
      angle = angle % 360;
      // print(loY, hiY);
   }
}

// TODO
// teeth width - more trapezium altering, also look into limits to prevent silly gears
// more colour options - maybe a colour picker library?
// button to add gears - look into arrays! (instead of g1, g2 and such)
// probably more stuff too