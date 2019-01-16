# Gears

A fork of https://www.openprocessing.org/sketch/450390.

Developed on the Chromium engine, but works fine on any modern browser


# What's different?

Lots of features have been added, including but not limited to:

- a rework to how the gear is drawn, allowing for more customisation
- using a class to define the gear, allowing you to make as many gears as you want
- options to change the colour and opacity of the gear
- options to change the location and size of the gear
- full customisation of the teeth (width, height and shape)
- options to change how quickly the gear spins


# Initialising a new gear

# Update these at the end!
General:

`gears.push(new Gear(x, y, colR, colG, colB, alpha, speed, direction, angleoffset, toothheight, toothwidth, toothoffset, teethamount, diameter));`

e.g. 

`gears.push(new Gear(mouseX, mouseY, 139, 0, 0, 255, 1, -1, 0, 10, 16, 1, 12, 180));`


# Parameters

x

- the x-coordinate of the gear
- measured in pixels

----

y

- the y-coordinate of the gear
- measured in pixels

----

colR

- the red value of the colour of the gear
- value in the range 0-255

----

colG

- the green value of the colour of the gear
- value in the range 0-255

----

colB

- the blue value of the colour of the gear
- value in the range 0-255

----

alpha

- the opacity of the gear
- value in the range 0-255, where 0 is invisible and 255 is opaque

----

speed

- how quickly the gear spins
- positive numerical value
- quick guide to speeds:
  - 0 will halt the gear
  - 1 is a moderate speed
  - 0.1 is very slow
  - 5 is very fast

----

direction

- the direction in which the gear turns
- 1 is clockwise, -1 is counter-clockwise

----

angleoffset

- the angle at which the gear is initialised
- measured in degrees, and so is a positive number in the range 0-360
- its primary use is to allow gears to be linked together

----

teethshape

- the shape in which the teeth are drawn
- can be either trapezium-shaped or triangle-shaped
- use by passing "tra" or "tri" 

----
toothheight

- height of the teeth
- measured in pixels

----

toothwidth

- width of the teeth
- measured in pixels

----

toothoffset

- the distance between the teeth and main body of the gear
- measured in pixels
- the greater the value, the closer the teeth move towards the centre of the gear

----

teethamount

- the number of teeth on the gear
- is a positive integer

----

diameter

- the diameter of the main body of the gear
- measured in pixels
