// New Project
// Jack Tennent-Ethier
// Input songs from youtube, type in the song and then there will be some 3D art that will bounce according to the decibles of the noise
// p5 js sound area to look at
//Making two dimensional right now until I can figure out how to input 3D models
//maybe use norm


let terrain = [];
const NUMBER_OF_RECTS = 100;

function setup() {
  createCanvas(windowWidth, windowHeight); 
  let howWide = width/NUMBER_OF_RECTS;
  generateTerrain(howWide);
}

function draw() {
  background(220);
  for (let someRect of terrain) {
    rect(someRect.x, someRect.y, someRect.w, someRect.h);
  }
}

function generateTerrain(theWidth) {
  let time = 0;
  let deltaTime = 0.01;
  for (let x = 0; x < width; x += theWidth){
    let theHeight = noise(time) * height;
    let someRect = spawnRectangle(x, theHeight, theWidth);
    terrain.push(someRect);
    time += deltaTime;
  }
}

function spawnRectangle(leftSide, rectHeight, rectWidth){
  let theRect = {
    x: leftSide,
    y: height - rectHeight,
    w: rectWidth,
    h: rectHeight,
  };
  return theRect;
}

function moving(moveSide, moveUp, moveDown){
  let 
}