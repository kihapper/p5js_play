var y = 100;
var backC = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);  // Size must be the first statement
  stroke(255);     // Set line drawing color to white
  frameRate(30);
}

function draw() { 
  background(backC);   // Set the background to black
  y = y - 5; 
  if (y < 0) { 
    y = height; 
  } 
  line(0, y, width, y);  
  fill(y);
  ellipse(windowWidth/2, windowHeight/2, 100, 100);
} 


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseReleased() {
    backC += 5;
    var fs = fullscreen();
    fullscreen(!fs);
}