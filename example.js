function setup(){
  createCanvas(1200, windowHeight);
  frameRate(60); // High refresh rates like 144 and 165 break the motion slightly, but they're not recommended anyway

  //toothoSlider (offset)
  toothoSlider = createSlider(-10, 10, 1, 0.1);
  toothoSlider.position(10, 30);
  toothoSlider.style('width', '300px');

  //toothhSlider (height)
  toothhSlider = createSlider(0, 100, 10, 1);
  toothhSlider.position(10, toothoSlider.y + 40);
  toothhSlider.style('width', '300px');

  //toothwSlider (width)
  toothwSlider = createSlider(0, 100, 16, 1);
  toothwSlider.position(10, toothoSlider.y + 80);
  toothwSlider.style('width', '300px');

  //angleSlider (angle offset)
  angleSlider = createSlider(0, 360, 32, 1);
  angleSlider.position(10, toothoSlider.y + 120);
  angleSlider.style('width', '300px');

  //speedSlider
  speedSlider = createSlider(0, 5, 0.8, 0.1);
  speedSlider.position(10, toothoSlider.y + 160);
  speedSlider.style('width', '300px');

  //g2sizeSlider
  g2sizeSlider = createSlider(10, 400, 150, 1);
  g2sizeSlider.position(10, toothoSlider.y + 200);
  g2sizeSlider.style('width', '300px');

  //opacitySlider
  opacitySlider = createSlider(1, 255, 255, 1);
  opacitySlider.position(10, toothoSlider.y + 240);
  opacitySlider.style('width', '300px');

  //rSlider
  rSlider = createSlider(0, 255, 255, 1);
  rSlider.position(10, toothoSlider.y + 280);
  rSlider.style('width', '300px');

  //gSlider
  gSlider = createSlider(0, 255, 255, 1);
  gSlider.position(10, toothoSlider.y + 320);
  gSlider.style('width', '300px');

  //bSlider
  bSlider = createSlider(0, 255, 55, 1);
  bSlider.position(10, toothoSlider.y + 360);
  bSlider.style('width', '300px');

  //xSlider
  xSlider = createSlider(0, 1200, 820, 1);
  xSlider.position(10, toothoSlider.y + 400);
  xSlider.style('width', '300px');

  //ySlider
  ySlider = createSlider(0, 1300, 300, 1);
  ySlider.position(10, toothoSlider.y + 440);
  ySlider.style('width', '300px');

  teethamountbox = createInput("16");
  teethamountbox.position(toothoSlider.width + 250, toothoSlider.y);
  teethamountbox.size(250);
}

let direction = 1

// geardata = [0, gears]; // This way, we can have separate angle values (0) to keep track of different sets of gears 


function draw() {
  bggears = []; // Store our gears in an array rather than g1, g2, g3 and so on...

  
  gears = [];


  // console.log(geardata)
  background(50); // Drawn here so that the gear doesn't leave a trail behind

  bggears.push(new Gear(350, 500, 0, 0, 0, 20, 0.01, 1, 0, "tri", 8, 15, -1.5, 120, 600));
  bggears.push(new Gear(350+240*2+6, 8+500+180*2, 0, 0, 0, 20, 0.01, -1, -1, "tri", 8, 15, -1.5, 120, 600));

  // gears.push(new Gear(150, 500, 100, 120, 130, opacity, speed, 1, 0, "tra", toothheight, toothwidth, toothoffset, teethamount, 100));
  bggears[0].draw();
  bggears[1].draw();


  // Text setup
  fill(255);
  textSize(21);

  // tooth scale
  let toothoffset = toothoSlider.value()
  text("Tooth offset: " + toothoffset, toothoSlider.x * 2 + toothoSlider.width, toothoSlider.y - 4);

  // tooth height
  let toothheight = toothhSlider.value()
  text("Tooth height: " + toothheight, toothhSlider.x * 2 + toothhSlider.width, toothhSlider.y - 4);

  // tooth width
  let toothwidth = toothwSlider.value()
  text("Tooth width: " + toothwidth, toothwSlider.x * 2 + toothwSlider.width, toothwSlider.y - 4);

  // angle offset
  let angleoffset = angleSlider.value();
  text("Angle offset: " + angleoffset, angleSlider.x * 2 + angleSlider.width, angleSlider.y - 4);

  // speed
  // let speed = 0; // very useful for testing
  let speed = speedSlider.value();
  text("Speed: " + speed, speedSlider.x * 2 + speedSlider.width, speedSlider.y - 4);
  
  // g2size
  let g2size = g2sizeSlider.value();
  text("Diameter of g2: " + g2size, g2sizeSlider.x * 2 + g2sizeSlider.width, g2sizeSlider.y - 4);

  // opacity
  let opacity = opacitySlider.value();
  text("Opacity: " + opacity, opacitySlider.x * 2 + opacitySlider.width, opacitySlider.y - 4);

  // r
  let g3r = rSlider.value();
  text("g3's r value: " + g3r, rSlider.x * 2 + rSlider.width, rSlider.y - 4);

  // g
  let g3g = gSlider.value();
  text("g3's g value: " + g3g, gSlider.x * 2 + gSlider.width, gSlider.y - 4);

  // b
  let g3b = bSlider.value();
  text("g3's b value: " + g3b, bSlider.x * 2 + bSlider.width, bSlider.y - 4);

  // x
  let xLoc = xSlider.value();
  text("g1's x value: " + xLoc, xSlider.x * 2 + xSlider.width, xSlider.y - 4);

  // y
  let yLoc = ySlider.value();
  text("g1's y value: " + yLoc, ySlider.x * 2 + ySlider.width, ySlider.y - 4);

  // teethamount
  let teethamount = teethamountbox.value();
  text("Number of teeth", teethamountbox.x + teethamountbox.width + 10, teethamountbox.y - 4);

  // gears[0]
  gears.push(new Gear(xLoc, yLoc, 100, 120, 130, opacity, speed, direction, 0, "tra", toothheight, toothwidth, toothoffset, teethamount, 200));
  gears[0].draw();
  
  // gears[1]
  gears.push(new Gear(gears[0].getX(), gears[0].getY() + gears[0].getDiameter()/2 + g2size/2 + toothheight, 139, 0, 0, opacity, speed, -direction, 
  angleoffset, "tra", toothheight, toothwidth, toothoffset, teethamount, g2size));
  gears[1].draw();

  // gears[2]
  gears.push(new Gear(gears[1].getX(), gears[1].getY() + gears[1].getDiameter()/2 + 250/2 + toothheight, g3r, g3b, g3g, opacity, speed*2, direction, 15, "tra", toothheight, toothwidth, toothoffset, teethamount/2, 250))
  gears[2].draw();
}

function reset(){
  location.reload();
}

window.onload = function(){
  document.getElementById("reset").onclick = function(){
    reset()
  };
  document.getElementById("dir").onclick = function(){
    direction = direction * -1
  };
}