// Interactive Scene Demo
// Jack Tennent-Ethier
// Spongebob but you have to kill the Patricks
// Once it hits a certain angle it will flip the gun
//player
let player_sponge;
//canvas
let canvasWidth = 650;
let canvasHeight = 650;
// x and y variables
let x = 374;
let y = 374;

function preload(){
  player_sponge = loadImage("Spingle.png");
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  //centering the image
  imageMode(CENTER);
}

function draw() {
  background(220);
  //Key pressed function is for the moving
  keyPressed();
  image(player_sponge, x, y, player_sponge.width/5, player_sponge.height/5);
}

function keyPressed(){
  // Going up
  if (keyIsDown(87)){
    y--;
    console.log("peepee");
  }
  // Going down
  if (keyIsDown(83)){
    y += 5;
  }
  // Going left
  if (keyIsDown(65)){
    x --;
  }
  /// Going right
  if (keyIsDown(68)){
    x ++;
  }
}