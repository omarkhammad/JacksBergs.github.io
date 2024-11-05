//make a kind of maze game, hardcode a maze
// use windowResized(windowHeight)

let screen = true;
let gridChangeOne = true;
let gridOne =[[0, 0, 0, 1, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0]];
const GRID_SIZE = 5;
let cellSize;
const OPEN_TILE = 0;
const IMPASSIBLE_TILE = 1;
const PLAYER_TILE = 9;
let player = {
  x: 0,
  y: 0,
};
let click = false;


function setup() {
  if (windowWidth < windowHeight){
    createCanvas(windowWidth, windowWidth);
  }
  else{
    createCanvas(windowHeight, windowHeight);
  }
  cellSize = height/GRID_SIZE;
  gridOne[player.y][player.x] = PLAYER_TILE;
}

function draw() {
  background(220);
  if (click === true){
    displayGridOne();
  }
}

function keyPressed(){
  if (key === "w"){
    movePlayer(player.x, player.y - 1);
  }

  if (key === "a"){
    movePlayer(player.x - 1, player.y);
  }

  if (key === "s"){
    movePlayer(player.x, player.y + 1);
  }

  if (key === "d"){
    movePlayer(player.x + 1, player.y);
  }
}

function mouseClicked(){
  if (click === false){
    click = true;
  }
}

function startingScreen(){
  
}


function displayGridOne(){
  if (gridChangeOne === true){
    for (let y = 0; y < GRID_SIZE; y++){
      for (let x = 0; x < GRID_SIZE; x++){
        if (gridOne[y][x] === IMPASSIBLE_TILE) {
          fill("black");
          square(x * cellSize, y * cellSize, cellSize);
        }
        else if(gridOne[y][x] === OPEN_TILE){
          fill("white");
          square(x * cellSize, y * cellSize, cellSize);
        }
        else if(gridOne[y][x] === PLAYER_TILE){
          fill("red");
          square(x * cellSize, y * cellSize, cellSize);
        }
      }
    }
  }
}

function movePlayer(x, y){
  if (x >= 0 && x < GRID_SIZE && y >= 0 && y < GRID_SIZE && gridOne[y][x] === OPEN_TILE){
    //when moving reset to an open spot
    gridOne[player.y][player.x] = OPEN_TILE;

    // keep track of player location
    player.x = x;
    player.y = y;

    // put player in the grid
    gridOne[player.y][player.x] = PLAYER_TILE;
  }
}
