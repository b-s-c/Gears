// Customisable gears

var angle = 0

class Gear{
   constructor(x, y, colR, colG, colB, alpha, speed, direction, angleoffset, teethshape, toothheight, toothwidth, toothoffset, teethamount, diameter){
      // this.angle = angle;
      this.x = x || 0;
      this.y = y || 0;
      this.colR = colR || 0;
      this.colG = colG || 0;
      this.colB = colB || 0;
      this.alpha = alpha || 255;
      this.speed = speed || 0.5;
      this.direction = direction || 1; // 1 (clockwise) or -1 (counter-clockwise)
      this.angleoffset = angleoffset || 0; // Angle offset, to interlock with neighbouring gears
      this.teethshape = teethshape || "tra";
      this.toothheight = toothheight || 10;
      this.toothwidth = toothwidth || 16;
      this.toothoffset = toothoffset || 1;
      this.teethamount = teethamount || 12;
      this.diameter = diameter || 100;
   }
   draw(){
      fill(this.colR, this.colG, this.colB, this.alpha); // Set gear colour    
      ellipse(this.x, this.y, this.diameter, this.diameter); // Draw the main circle
      fill(0, 0, 0, this.alpha); // Set colour to black
      ellipse(this.x, this.y, 20, 20);
      fill(this.colR, this.colG, this.colB, this.alpha); // Set tooth colour 
      noStroke(); // Ensure that the teeth don't have an outline

      if (this.teethshape != "tra" && this.teethshape != "tri"){
        this.errorCatcher("invalidShape");
      }

      for (var i = 0; i < 360; i += 360/this.teethamount) { // Draw a tooth on the gear a given number of times 
        push(); // push(); and pop(); ensure that we return to the "top" of the gear before going to draw our next gear. Otherwise, we will keep incrementing stuff we don't want to
        translate(this.x, this.y); // Ensures that the teeth move with the gear
        rotate(radians((angle + i + this.angleoffset) * this.direction)); // Ensures that the teeth are drawn all around the gear (i is the location ON the gear, speed is the speed that the gear is rotating)
      
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
        pop(); //See push();
      }
      angle += this.speed; // Adjust how fast the gear should spin
      angle = angle % 360;
   }
   errorCatcher(type){
      if (type == "invalidShape"){
        fill(255);
        window.alert("Invalid value passed to teethshape; please consult the documentation. Refresh the page to try again.");
      }
   }
   getX(){
      return this.x;
   }
   setX(newx){
      this.x = newx
   }
   getY(){
      return this.y;
   }
   setX(newx){
      this.y = newy;
   }
   getRGB(){
      return [this.colR, this.colG, this.colB];
   }
   setRGB(rgbarray){
      this.colR = rgbarray[0];
      this.colG = rgbarray[1];
      this.colB = rgbarray[2];
   }
   getAlpha(){
      return this.alpha;
   }
   setAlpha(newalpha){
      this.alpha = newalpha;
   }
   getSpeed(){
      return this.speed;
   }
   setSpeed(newspeed){
      this.speed = newspeed;
   }
   getAngleOffset(){
      return this.angleoffset;
   }
   setAngleOffset(newangleoffset){
      this.angleoffset = newangleoffset;
   }
   getTeethShape(){
      return this.teethshape;
   }
   setTeethShape(newteethshape){
      this.teethshape = newteethshape;
   }
   getToothHeight(){
      return this.toothheight;
   }
   setToothHeight(newheight){
      this.toothheight = newheight;
   }
   getToothWidth(){
      return this.toothwidth;
   }
   setToothWidth(newwidth){
      this.toothwidth = newwidth
   }
   getToothOffset(){
      return this.toothoffset;
   }
   setToothOffset(newoffset){
      this.toothoffset = newoffset
   }
   getDiameter(){
      return this.diameter;
   }
   setDiameter(newdiameter){
      this.diameter = newdiameter;
   }
   getTeethAmount(){
      return this.teethamount;
   }
   setTeethAmount(newteethcount){
      this.teethcount = newteethcount;
   }
}