function preload(){

}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier("Mobilenet", modelLoaded);
}

function draw(){
  classifier.classify(video , gotResults);
  image(video, 0, 0, 300, 300);
}

function modelLoaded(){
  console.log("modelLoaded")
}

function gotResults(error, results){
  if(error){
    console.log(error);
  }
  else{
    console.log(results);
    document.getElementById("object_name").innerHTML = results[0].label;
    document.getElementById("object_accuracy").innerHTML = results[0].confidence.toFixed(3);
  }
}

