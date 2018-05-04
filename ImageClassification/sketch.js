// Copyright (c) 2018 ml5
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ML5 Example
ImageNet_Simple
Simple Image Classification using p5.js
=== */

// Initialize the ImageNet method with the MobileNet model.

//const classifier = new ml5.ImageClassifier('SqueezeNet');
const classifier = new ml5.ImageClassifier('SqueezeNet');
var current_classifier = document.getElementById("id01");
current_classifier.innerHTML = "Trained Model : SqueezeNet";


let img;

function setup() {
  noCanvas();
  // Load the image
  img = createImg('images/kitten.jpg', imageReady);
}

// When the image has been loaded,
// get a prediction for that image
function imageReady() {
  classifier.predict(img.elt, 7, gotResult);
}

// When we get the results
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
    
  select('#result_5').html(results[5].label);
  select('#probability_5').html(nf(results[5].probability, 0, 2));
    
  select('#result_6').html(results[6].label);
  select('#probability_6').html(nf(results[6].probability, 0, 2));
    
  select('#result_7').html(results[7].label);
  select('#probability_7').html(nf(results[7].probability, 0, 2));
}
