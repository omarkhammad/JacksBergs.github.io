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
// gun variables
let gun_x = 364;
let gun_y = 364;
let gun_1;

let dx;
let dy;

let gunMoveX;
let gunMoveY;

function preload(){
  player_sponge = loadImage("Spingle.png");
  gun_1 = loadImage("gun.png")
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
  gunMove();
  image(player_sponge, x, y, player_sponge.width/5, player_sponge.height/5);
  image(gun_1, gun_x, gun_y, gun_1.width/15, gun_1.height/15);
}

function keyPressed(){
  // Going up
  if (keyIsDown(87)){
    y -= 5;
    console.log("peepee");
  }
  // Going down
  if (keyIsDown(83)){
    y += 5;
  }
  // Going left
  if (keyIsDown(65)){
    x -= 5;
  }
  /// Going right
  if (keyIsDown(68)){
    x += 5;
  }
}

function gunMove(){
  if (gun_1 === player_sponge + 10){
    dx = gunMoveX - x;
    dy = gunMoveY - y;
    placement = sqrt((dx*dx)+(dy*dy));
  }

}