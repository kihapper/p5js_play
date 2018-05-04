function setup() {
  createCanvas(480, 120);
  var constraints = {
    video: {
      mandatory: {
        minWidth: 1280,
        minHeight: 720
      },
      optional: [{ maxFrameRate: 10 }]
    },
    audio: true
  };
  createCapture(constraints, function(stream) {
    console.log(stream);
  });
}