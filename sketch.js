// Customisable gears



// https://p5js.org/reference/#/p5/windowWidth + windowHeight to create background decoration

// updated version including transparency fixes


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60); // High refresh rates like 144 and 165 break the motion slightly, but they're not recommended anyway

  //toothoSlider (offset)
  toothoSlider = createSlider(-10, 10, 1, 0.1);
  toothoSlider.position(10, 10);
  toothoSlider.style('width', '300px');

  //toothhSlider (height)
  toothhSlider = createSlider(0, 100, 10, 1);
  toothhSlider.position(10, 50);
  toothhSlider.style('width', '300px');

  //toothwSlider (width)
  toothwSlider = createSlider(0, 100, 16, 1);
  toothwSlider.position(10, 90);
  toothwSlider.style('width', '300px');

  //angleSlider (angle offset)
  angleSlider = createSlider(0, 360, 15, 1);
  angleSlider.position(10, 130);
  angleSlider.style('width', '300px');

  //speedSlider
  speedSlider = createSlider(0, 5, 1, 0.1);
  speedSlider.position(10, 170);
  speedSlider.style('width', '300px');

  //g2sizeSlider
  g2sizeSlider = createSlider(10, 400, 100, 1);
  g2sizeSlider.position(10, 210);
  g2sizeSlider.style('width', '300px');

  //opacitySlider
  opacitySlider = createSlider(0, 255, 255, 1);
  opacitySlider.position(10, 250);
  opacitySlider.style('width', '300px');

  teethamountbox = createInput("10");
  teethamountbox.position(toothoSlider.width + 250, 10);
  teethamountbox.size(250);
}

function draw() {
  background(50); // Drawn here so that the gear doesn't leave a trail behind
  
  gears = []; // Store our gears in an array rather than g1, g2, g3 and so on...

  // Text setup
  fill(255);
  textSize(21);

  // tooth scale
  let toothoffset = toothoSlider.value()
  text("Tooth offset: " + toothoffset, toothoSlider.x * 2 + toothoSlider.width, toothoSlider.y + 16);

  // tooth height
  let toothheight = toothhSlider.value()
  text("Tooth height: " + toothheight, toothhSlider.x * 2 + toothhSlider.width, toothhSlider.y + 16);

  // tooth width
  let toothwidth = toothwSlider.value()
  text("Tooth width: " + toothwidth, toothwSlider.x * 2 + toothwSlider.width, toothwSlider.y + 16);

  // angle offset
  let angleoffset = angleSlider.value();
  text("Angle offset: " + angleoffset, angleSlider.x * 2 + angleSlider.width, angleSlider.y + 16);

  // speed
  // let speed = 0; // very useful for testing
  let speed = speedSlider.value();
  text("Speed: " + speed, speedSlider.x * 2 + speedSlider.width, speedSlider.y + 16);
  
  // g2size
  let g2size = g2sizeSlider.value()
  text("Diameter of g2: " + g2size, g2sizeSlider.x * 2 + g2sizeSlider.width, g2sizeSlider.y + 16);

  // opacity
  let opacity = opacitySlider.value()
  text("Opacity: " + opacity, opacitySlider.x * 2 + opacitySlider.width, opacitySlider.y + 16);

  // teethamount
  let teethamount = teethamountbox.value();
  text("Number of teeth", teethamountbox.x + teethamountbox.width + 10, teethamountbox.y + 16);

  // gears[0]
  gears.push(new Gear(150, 500, 100, 120, 130, opacity, speed, 1, 0, "tra", toothheight, toothwidth, toothoffset, teethamount, 100));
  gears[0].draw();

  // print(gears[0].x) // How to get a parameter (example for quick reference)
  
  // gears[1]
  gears.push(new Gear(gears[0].x + gears[0].diameter/2 + g2size/2 + toothheight, gears[0].y, 139, 0, 0, opacity, speed, -1, 
angleoffset, "tra", toothheight, toothwidth, toothoffset, teethamount, g2size));
  gears[1].draw();
}

var angle = 0 // This needs to be global, since gears can't move at different rates

class Gear{
   constructor(x, y, colR, colG, colB, alpha, speed, direction, angleoffset, teethshape, toothheight, toothwidth, toothoffset, teethamount, diameter){
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
        rotate(radians((angle + i + this.angleoffset) * this.direction)); // Ensures that the teeth are drawn all around the gear (i is the location ON the gear, speed is the speed that the gear is rotating)
        
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
      angle += this.speed; // Adjust how fast the gear should spin
      angle = angle % 360;
   }
   invalidShape(){ // This needs to be here, since it's a parameter that could easily cause an error
      fill(255);
      text("Invalid value passed to teethshape; please consult the documentation.", mouseX, mouseY);
   }
}

// TODO
// triangle teeth
// make a nice example sketch
// button to add gears (and remove them - so possibly left click right click)
// sparks!
// probably more stuff too
