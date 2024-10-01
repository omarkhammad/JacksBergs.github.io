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

let bullet_1;
let bulletX;
let bulletY;

let speed = 5;


function preload(){
  player_sponge = loadImage("Spingle.png");
  gun_1 = loadImage("gun.png");
  bullet_1 = loadImage("bullet.png");
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
  shoot();
  image(player_sponge, x, y, player_sponge.width/5, player_sponge.height/5);
  image(gun_1, gun_x, gun_y, gun_1.width/15, gun_1.height/15);
}

function keyPressed(){
  // Going up
  if (keyIsDown(87)){
    y -= speed;
    gun_y = y;
    console.log("peepee");
  }
  // Going down
  if (keyIsDown(83)){
    y += speed;
    gun_y = y;
  }
  // Going left
  if (keyIsDown(65)){
    x -= speed;
    gun_x = x;
  }
  /// Going right
  if (keyIsDown(68)){
    x += speed;
    gun_x = x;
  }
  if (keyIsDown(70)){
    shoot();
  }
}

function shoot(){
  image(bullet_1, bulletX, bulletY, bullet_1.width/10, bullet_1.height/10);
  bulletX = gun_x + speed
  bulletY = gun_y + speed

}
