var capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  var constraints = {
    audio: false,
    video: {
      //minWidth: windowWidth,
      //minHeight: windowHeight,
      facingMode: "environment",
      frameRate: 10
    }
  };
  capture = createCapture(constraints);
  capture.hide();
}
function draw() {
  image(capture, 0, 0, windowWidth, windowHeight);
  filter(INVERT);
}