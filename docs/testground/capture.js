function setup() {
  createCanvas(320, 180);
  var constraints = {
    video: {
      mandatory: {
        minWidth: 320,
        minHeight: 180
      },
      optional: [{ maxFrameRate: 10 }]
    },
    audio: true
  };
  createCapture(constraints, function(stream) {
    console.log(stream);
  });
}