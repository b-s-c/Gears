# Gears

A fork of [this sketch](https://www.openprocessing.org/sketch/450390), Gear.

The original sketch is licensed with [Creative Commons Attribution ShareAlike 3.0](https://creativecommons.org/licenses/by-sa/3.0).

Developed on the Chromium engine, but works fine on any modern browser.

# What's different?

Lots of features have been added, including but not limited to:

- a rework to how the gear is drawn, allowing for more customisation,
- using a class to define the gear, allowing you to make as many gears as you want,
- options to change the colour and opacity of the gear,
- options to change the location and size of the gear,
- full customisation of the teethprog-assessment-p5 (width, height and shape (trapezium-shaped or triangle-shaped)),
- options to change how quickly the gear spins,
- and a test page including elements to test all of the new features, as well as a couple of example setups.


# Initialising a new gear (constructor)

General:

`gears.push(new Gear(x, y, colR, colG, colB, alpha, speed, direction, angleoffset, teethshape, toothheight, toothwidth, toothoffset, teethamount, diameter));`

e.g. 

`gears.push(new Gear(mouseX, mouseY, 139, 0, 0, 255, 1, -1, 0, "tra", 10, 16, 1, 12, 180));`

----

With p5 renderer:

First, initialise your renderer under setup(), e.g.

`pg = createGraphics(500, 500);`

Every time you draw a gear, pass to it your createGraphics instance, e.g.

`myGear.draw(pg);`

# Recommended usage

I'd recommend having an array of gears and storing each gear in its own array slot, as I've done in `example.js`.


# Parameters

Each parameter has its own get and set function in the Gear class. 

For example, 

* "x" has 
  * "getX()" and 
  * "setX(intcoord)".
* "teethamount" has
  * "getTeethAmount()" and
  * "setTeethAmount(intvalue)".

The other parameters follow the same capitalisation pattern as these examples. If needed, an exhaustive list is provided below.

----

x

- the x-coordinate of the gear
- measured in pixels

- getX()
- setX(integer)

----

y

- the y-coordinate of the gear
- measured in pixels

- getY()
- setY(integer)

----

colR

- the red value of the colour of the gear
- value in the range 0-255

- getRGB()[0]
- setRGB([integer, integer, integer])

----

colG

- the green value of the colour of the gear
- value in the range 0-255

- getRGB()[1]
- setRGB([integer, integer, integer])

----

colB

- the blue value of the colour of the gear
- value in the range 0-255

- getRGB()[2]
- setRGB([integer, integer, integer])

----

alpha

- the opacity of the gear
- value in the range 0-255, where 0 is invisible and 255 is opaque

- getAlpha()
- setAlpha(integer)

----

speed

- how quickly the gear spins
- positive numerical value
- quick guide to speeds:
  - 0 will halt the gear
  - 1 is a moderate speed
  - 0.1 is very slow
  - 5 is very fast

- getSpeed()
- setSpeed(float)

----

direction

- the direction in which the gear turns
- 1 is clockwise, -1 is counter-clockwise

- getDirection()
- setDirection(integer)

----

angleoffset

- the angle at which the gear is initialised
- measured in degrees, and so is a positive number in the range 0-360
- its primary use is to allow gears to be linked together

- getAngleOffset()
- setAngleOffset(integer)

----

teethshape

- the shape in which the teeth are drawn
- can be either trapezium-shaped or triangle-shaped
- use by passing "tra" or "tri" 

- getTeethShape()
- setTeethShape(string)

----

toothheight

- height of the teeth
- measured in pixels

- getToothHeight()
- setToothHeight(integer)

----

toothwidth

- width of the teeth
- measured in pixels

- getToothWidth()
- setToothWidth(integer)

----

toothoffset

- the distance between the teeth and main body of the gear
- measured in pixels
- the greater the value, the closer the teeth move towards the centre of the gear

- getToothOffset()
- setToothOffset(integer)

----

teethamount

- the number of teeth on the gear
- is a positive integer

- getTeethAmount()
- setTeethAmount(integer)

Note: In my testing, the sketch lags at around 10000 or so teeth being drawn (@60fps). YMMV, but I think anything above 1000 shouldn't be needed anyway.

----

diameter

- the diameter of the main body of the gear
- measured in pixels

- getDiameter()
- setDiameter(integer)

# Credits

[Markdown-formatted CC licenses](https://github.com/idleberg/Creative-Commons-Markdown)
