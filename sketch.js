let resolution =10
let snake;

let DEBUG = false;

let frutas;


function setup() {
  frameRate(15);
  createCanvas(600, 600);

  snake = new Snake();

  frutas = [];

    createNewFood();
  
}

function draw() {

  background(51);
  snake.death();
  snake.update();
  snake.checkEatFood()
  drawScore();
  drawFruits();
  snake.show();
  
}

function keyPressed() {
  if (keyCode === 68) {
    snake.dir(1,0)
  } else if (keyCode === 65) {
     snake.dir(-1,0)
  }
  else if (keyCode === 87) {
     snake.dir(0,-1)
  }
  else if (keyCode === 83) {
    snake.dir(0,1)
  }
}

function drawFruits() {
  for (let i = 0; i < frutas.length; i++) {
    fill(255,0,100);
    rect(frutas[i].x,frutas[i].y,resolution,resolution);
  } 
}

function createNewFood() {
  let x = int(random(1,int(width/resolution)))*resolution
  let y = int(random(1,int(height/resolution)))*resolution
  if(x !== snake.x && y !== snake.y){
    frutas.push({x:x,y:y});
  }else{
    createNewFood()
  }
  
}

function mousePressed(){
  //snake.total ++;
}

function drawScore(){
  textSize(20)
  text("Score: "+ snake.total,10,25);

}