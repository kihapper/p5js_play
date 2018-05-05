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

var Title_text;

var word_1;
var word_probability_1;

var word_2;
var word_probability_2;

var word_3;
var word_probability_3;

var word_4;
var word_probability_4;

var word_5;
var word_probability_5;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(15);
  var constraints = {
    audio: false,
    video: {
      facingMode: "environment",
      frameRate: 15
    }
  };
  // Load the camera and call guess() once it has loaded.
  video = createCapture(constraints, guess);
  video.hide();

  word_1 = 'Now loading...';
  word_probability_1 = '%';
  word_2 = 'Now loading...';
  word_probability_2 = '%';
  word_3 = 'Now loading...';
  word_probability_3 = '%';
  word_4 = 'Now loading...';
  word_probability_4 = '%';  
  word_5 = 'Now loading...';
  word_probability_5 = '%';
  Title_text = 'phonvert.ai'


}
function draw() {
  
  image(video, 0, 0, windowWidth, windowHeight);

  filter(GRAY); // ;-)  
  //fill(50);
  fill(0,255,0);
  textFont('Helvetica');

  textSize(35);
  text(Title_text, windowWidth*0.1, windowHeight*0.1);

  textSize(18);
  text(word_1, windowWidth*0.2, windowHeight*0.2);
  text(word_probability_1, windowWidth*0.1, windowHeight*0.2);

  text(word_2, windowWidth*0.2, windowHeight*0.3);
  text(word_probability_2, windowWidth*0.1, windowHeight*0.3);

  text(word_3, windowWidth*0.2, windowHeight*0.4);
  text(word_probability_3, windowWidth*0.1, windowHeight*0.4);

  text(word_4, windowWidth*0.2, windowHeight*0.5);
  text(word_probability_4, windowWidth*0.1, windowHeight*0.5);

  text(word_5, windowWidth*0.2, windowHeight*0.6);
  text(word_probability_5, windowWidth*0.1, windowHeight*0.6);

  //guess(); NEVER PUT THIS HERE>..

}

// Get a prediction for the current video frame
function guess() {
  classifier.predict(video.elt, 5, gotResult);
}

function mouseReleased() {
  var fs = fullscreen();
  fullscreen(!fs);
}

function gotResult(results) {
  // The results are in an array ordered by probability.
  word_1 = results[0].label;
  word_probability_1 = Math.floor(results[0].probability*100) + '%';

  word_2 = results[1].label;
  word_probability_2 = Math.floor(results[1].probability*100)+ '%';

  word_3 = results[2].label;
  word_probability_3 = Math.floor(results[2].probability*100)+ '%';

  word_4 = results[3].label;
  word_probability_4 = Math.floor(results[3].probability*100)+ '%';

  word_5 = results[4].label;
  word_probability_5 = Math.floor(results[4].probability*100)+ '%';
    
  setTimeout(guess, 500);
}
