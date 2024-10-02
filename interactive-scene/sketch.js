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
let x = 100;
let y = 375;
// gun variables
let gun_x = 100;
let gun_y = 375;
let gun_1;

let bullet_1;
let bulletX;
let bulletY;

let cooldown = 0;

let speed = 40;

let playerSpeed = 20;

let patrinc;
let patX;
let patY;

let isBullet = false;

let died;

let deadPlayer = false;

let patSpeed;

function preload(){
  player_sponge = loadImage("Spingle.png");
  gun_1 = loadImage("gun.png");
  bullet_1 = loadImage("bullet.png");
  patrinc = loadImage("Patrink.png");
  died = loadImage("deades.png");
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  //centering the image
  imageMode(CENTER);
  patrickMaker();
}

function draw() {
  background(220);
  //Key pressed function is for the moving
  keyPressed();
  image(player_sponge, x, y, player_sponge.width/5, player_sponge.height/5);
  cooldown++;

  patX -= patSpeed;

  if (patX <= 50){
    deadPlayer = true;
  }

  if (isBullet){
    bulletX += speed;
    image(bullet_1, bulletX, bulletY, bullet_1.width/10, bullet_1.height/10);
  }
  if (dist(patX, patY, bulletX, bulletY) <= 50){
    bulletX = 0;
    bulletY = 0;
    cooldown = 30;
    isBullet = false;
    patrickMaker();
  }
  
  image(gun_1, gun_x, gun_y, gun_1.width/15, gun_1.height/15);
  image(patrinc, patX, patY, patrinc.width/5, patrinc.height/5);

  if (deadPlayer){
    image(died, width/2, height/2, width, height);
    fill("white");
    textSize(100);
    text('You died', width/2, height/2);
  }

}

function keyPressed(){
  // Going up
  if (keyIsDown(87)){
    if (y >= 30){
      y -= playerSpeed;
      gun_y = y;
    }
  }
  // Going down
  if (keyIsDown(83)){
    if (y <= 630){
      y += playerSpeed;
      gun_y = y;
    }
  }

  if (keyIsDown(70)){
    shoot();
  }
}

function shoot(){
  if (cooldown >= 30){
    bulletX = x;
    bulletY = y;
    isBullet = true;
    cooldown = 0;
    image(bullet_1, bulletX, bulletY, bullet_1.width/10, bullet_1.height/10);
  }

}

function patrickMaker(){
  patSpeed = random(3, 15);
  patX = width;
  patY = random(0, height - patrinc.height/5);
}