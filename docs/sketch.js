// Copyright (c) 2018 ml5
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ML5 Example
ImageNet_Camera
Video Camera Classification using p5.js
=== */

// Initialize the ImageNet method with the MobileNet model.
const classifier = new ml5.ImageClassifier('MobileNet');
let video;
var constraints;


function setup() {
  noCanvas();

  var constraints = {
    audio: false,
    video: {
      facingMode: "user"
    }
  };
  // Load the camera and call guess() once it has loaded.
  video = createCapture(constraints, guess);
}

// Get a prediction for the current video frame
function guess() {
  classifier.predict(video.elt, 5, gotResult);
}

function gotResult(results) {
  // The results are in an array ordered by probability.

    select('#result_0').html(results[0].label);
  select('#probability_0').html(nf(results[0].probability, 0, 2));
    
  select('#result_1').html(results[1].label);
  select('#probability_1').html(nf(results[1].probability, 0, 2));
    
  select('#result_2').html(results[2].label);
  select('#probability_2').html(nf(results[2].probability, 0, 2));

  select('#result_3').html(results[3].label);
  select('#probability_3').html(nf(results[3].probability, 0, 2));
    
  select('#result_4').html(results[4].label);
  select('#probability_4').html(nf(results[4].probability, 0, 2));
    
  setTimeout(guess, 500);
}
