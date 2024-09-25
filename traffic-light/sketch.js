// Traffic Light Starter Code
// Jack
// The Date Here

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/#/p5/millis

let ligthState = "green";
let lastTImeSwitched = 0;
const GREEN_LIGHT_DURATION = 3000;
const YELLOW_LIGHT_DURATION = 1000;
const RED_LIGHT_DURATION = 4000;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  drawOutlineOfLights();
  switchStateIfNeeded();
  displayCorrectLight();
}
function switchStateIfNeeded(){
  if (ligthState === "green" && millis() > lastTImeSwitched + GREEN_LIGHT_DURATION){
    ligthState = "yellow";
    lastTImeSwitched = millis();
  }

  if (ligthState === "yellow" && millis() > lastTImeSwitched + GREEN_LIGHT_DURATION){
    ligthState = "red";
    lastTImeSwitched = millis();
  }
  if (ligthState === "red" && millis() > lastTImeSwitched + GREEN_LIGHT_DURATION){
    ligthState = "green";
    lastTImeSwitched = millis();
  }
}

function displayCorrectLight(){
  if (ligthState === "green"){
    fill("green");
    ellipse(width/2, height/2 + 65, 50, 50); //bottom
  }
  else if(ligthState === "yellow"){
    fill("yellow");
    ellipse(width/2, height/2, 50, 50); //middle
  }
  else if(ligthState === "red"){
    fill("red");
    ellipse(width/2, height/2 - 65, 50, 50); //top
  }
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);
}
