// Interactive Scene Demo
// Jack Tennent-Ethier
// Spongebob but you have to kill the Patricks


let player_sponge;
let x = 50;
let y = 50;


function preload(){
  player_sponge = loadImage("Spingle.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  image(player_sponge, mouseX, mouseY, player_sponge.width/5, player_sponge.height/5);

  if keyIsPressed(){
    if (keyPressed(x, y))
    
  }
}
