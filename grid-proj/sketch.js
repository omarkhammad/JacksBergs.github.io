//make a kind of maze game, hardcode a maze
// use windowResized(windowHeight)


let grid; 
const GRID_SIZE = 5;
let cellSize;


function setup() {
  if (windowWidth < windowHeight){
    createCanvas(windowWidth, windowWidth);
  }
  else{
    createCanvas(windowHeight, windowHeight);
  }
}

function draw() {
  background(220);
}
