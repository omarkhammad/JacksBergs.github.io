//make a kind of maze game, hardcode a maze
//Make a mini game thingy
// use windowResized(windowHeight)

let screen = true;
let gridChangeOne = true;
let gridOne =[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
const GRID_SIZE = 10;
let cellSize;
const OPEN_TILE = 0;
const IMPASSIBLE_TILE = 1;
const PLAYER_TILE = 2;
const FALLING_TILE = 3;
let player = {
  x: 5,
  y: 5,
};
let enemy = {
  x: 0,
  y: 0,
};
let click = false;
let timer = 500; // going to do it in millis


function setup() {
  if (windowWidth < windowHeight){
    createCanvas(windowWidth, windowWidth);
  }
  else{
    createCanvas(windowHeight, windowHeight);
  }
  enemy.x = round(random(0, 9));
  cellSize = height/GRID_SIZE;
  // Game one
  gridOne[player.y][player.x] = PLAYER_TILE;
  gridOne[enemy.y][enemy.x] = FALLING_TILE;

  //move square down every second
  window.setInterval(autoMoveEnemy, timer);
}

function draw() {
  background(220);
  if (click === true){
    displayGridOne();
  }
  if (enemy.y >= 9){
    gridOne[enemy.y][enemy.x] = OPEN_TILE;
    enemy.y = 0;
    enemy.x = round(random(0, 9));
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

  if (key === "t"){
    enemyMove(enemy.x + 1, enemy.y);
  }
}

function autoMoveEnemy() {
  enemyMove(enemy.x, enemy.y + 1);
}

function spawnEnemy() {
  enemy.x = round(random(0, 9));
  window.setInterval(autoMoveEnemy, timer);
}

function mouseClicked(){
  if (click === false){
    click = true;
  }
}

function startingScreen(){
  
}

function enemyMove(x, y){
  if (x >= 0 && x < GRID_SIZE && y >= 0 && y < GRID_SIZE && gridOne[y][x] === OPEN_TILE){
    gridOne[enemy.y][enemy.x] = OPEN_TILE;

    // keep track of enemy location
    enemy.x = x;
    enemy.y = y;

    // put enemy in the grid
    gridOne[enemy.y][enemy.x] = FALLING_TILE;
    gridOne[player.y][player.x] = PLAYER_TILE;
  }
}

function displayGridOne(){
  if (gridChangeOne === true){
    //Objects/Players
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
        else if(gridOne[y][x] === FALLING_TILE){
          fill("blue");
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
