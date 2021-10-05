'use strict';

//Canvas initizalize size

let cnvs;
let cnvsWidth = 1000;
let cnvsHeight = 400;

//Parent padding and height

let paddingDiv = 32;
let vhDiv = 0.85;

// Rotation variables

let phase = 0;
let zoff = 0;

// Color variables

let hue = 190;
let tempHue = 190;

// Setup

function setup() {
  background(0);
  pixelDensity(1);
  cnvs=createCanvas(windowWidth - paddingDiv, windowHeight * vhDiv);
  cnvs.parent('sketchDiv'); //html element parent
  colorMode(HSB);
  cnvs.style('max-width', '1200px');
}

// Resize canvas according to window size

function windowResized() {
  resizeCanvas(windowWidth - paddingDiv, windowHeight * vhDiv);

}

// Draw

function draw(){
  background('#1B1D21'); // bg color
  translate(width / 1.3, height / 2); // positioning
  stroke(hue, 255, 255);
  strokeWeight(2);
  noFill();
  beginShape();
  let noiseMaxX = map(mouseX, 0, 400, 10, 1); //map mouse X location
  let noiseMaxY = map(mouseY, 0, 400, 12, 1); //map mouse Y location
  for (let a = 0; a < TWO_PI; a += radians(5)) {
    let xoff = map(cos(a + phase), -1, 1, 0, noiseMaxX);
    let yoff = map(sin(a + phase), -1, 1, 0, noiseMaxY);
    let r = map(noise(xoff, yoff, zoff), 0, 1, 100, (windowHeight * vhDiv) / 2.5);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);
  phase -= 0.003;
  zoff += 0.01;

  //Loop for color limit

  if (hue == 190 || (hue > tempHue && hue != 300)){
    tempHue = hue;
    hue = hue + 1;
  } else if (hue == 300 || (hue < tempHue && hue != 190)){
    tempHue = hue;
    hue = hue - 1;
  }

}
