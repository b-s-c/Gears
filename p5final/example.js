function setup(){
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

gears = [] // Store our gears in an array rather than g1, g2, g3 and so on...
geardata = [0, gears]; // This way, we can have separate angle values (0) to keep track of different sets of gears 

function draw() {
  background(50); // Drawn here so that the gear doesn't leave a trail behind

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
  gears.push(new Gear(geardata[0], 150, 500, 100, 120, 130, opacity, speed, 1, 0, "tra", toothheight, toothwidth, toothoffset, teethamount, 100));
  
  gears[0].draw(geardata[0]);

  // print(gears[0].x) // How to get a parameter (example for quick reference)
  
  // gears[1]
  gears.push(new Gear(geardata[0], gears[0].x + gears[0].diameter/2 + g2size/2 + toothheight, gears[0].y, 139, 0, 0, opacity, speed, -1, 
  angleoffset, "tra", toothheight, toothwidth, toothoffset, teethamount, g2size));
  
  gears[1].draw(geardata[0]);
  
  geardata[0] += gears[0].getangle(); // again, a for loop will be best here
  geardata[0] += gears[1].getangle();

}

// TODO
// for gears in...draw (rather than calling draw() each time)
