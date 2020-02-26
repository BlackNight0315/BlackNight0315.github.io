var gridSize = 20;//grid size
var snake;
var food;
var particle;
var foodstack = 0;
var gametick = 0;
var gamerunning = true;
var scores;
var scoreString;
function setup() {
  createCanvas(800, 600);
  snake = new snakeObj();
  foodstack = 0;
  food = new foodObj(1);
  particle = new particleObj();
  scores = 0;
  scoresString = new stringObj(scores.toString());
  frameRate(60);
}

function draw() {
  if(gamerunning == true) {
    gametick ++;
    background(255);// clear screen
    if(gametick >= 10){
      checkCrash(); // check snake's head hit food
      food.update();
      snake.update();
      gametick = 0;
    }
    food.alphaupdate();
    snake.alphaupdate();
    scoresString.update(scores.toString());
    scoresString.display();
    particle.update();
    particle.display();
    food.display();
    snake.display();
  }
}

function checkCrash() {
  for(index in snake.body){
    if(index != 0){
      if (snake.body[0].x == snake.body[index].x && snake.body[0].y == snake.body[index].y){
        gamerunning = false;
        fill(0,200,200);
        textSize(30);
        text("Press any key to replay",width/2,height/3*2);
        break;
      }
    }
  }
  for(index in food.positions) {
    if (food.positions[index].x == snake.body[0].x && food.positions[index].y == snake.body[0].y) {
      particle.drawparticle(food.positions[index].x,food.positions[index].y,int(random(3,5)));
      food.positions[index] = null;
      snake.addCell();
      scores += 1;
      scoresString.pom();
      foodstack += 1;
      if(foodstack > 9) {
        food.addfood();
        foodstack = 0;
      }
      break;
    }
  }
}

function foodObj(foodCount) {
  this.count = foodCount;
  this.alphalist = new Array(this.count);
  this.positions = new Array(this.count);
  this.randomPos = function(i) {
    this.positions[i] = createVector(floor(random(0, width / gridSize)), floor(random(0, height / gridSize)));
  }
  this.addfood = function(){
    this.positions.push(this.positions[this.positions.length-1]);
    this.randomPos(this.positions.length-1);
    this.count += 1;
  }
  this.update = function() {
    for(i = 0; i < this.count; i ++) {
      if (this.positions[i] == undefined || this.positions[i] == null) {
        this.randomPos(i);
        this.alphalist[i] = 0;
      }
    }
  }
  this.alphaupdate = function(){
    for(i = 0; i < this.count; i ++) {
      if (this.alphalist[i] < 255){
        this.alphalist[i] += 10;
      }
    }
  }
  this.display = function() {
    for(index in this.positions) {
      fill(0, 200, 200,this.alphalist[index]);
      noStroke();
      rect(this.positions[index].x * gridSize, this.positions[index].y * gridSize, gridSize, gridSize);
    }
  }
}

function snakeObj() {
  this.direction = createVector(1);
  this.body = new Array(createVector());
  this.bodyalpha = new Array(1);
  this.bodyalpha[0] = 0;
  
  this.moveLeft = function() {
    this.direction = createVector(-1);
  }
  this.moveRight = function() {
    this.direction = createVector(1);
  }
  this.moveUp = function() {
    this.direction = createVector(0, -1);
  }
  this.moveDown = function() {
    this.direction = createVector(0, 1);
  }
  this.addCell = function() {
    this.body.push(this.body[this.body.length - 1]);
    this.bodyalpha = append(this.bodyalpha,0);
  }
  this.update = function() {
    nextX = this.body[0].x + this.direction.x;
    nextY = this.body[0].y + this.direction.y;
    if (nextX >= width / gridSize) nextX = 0;
    if (nextX < 0) nextX = width / gridSize - 1;
    if (nextY >= height / gridSize) nextY = 0;
    if (nextY < 0) nextY = height / gridSize - 1;
    this.body.pop();
    this.body.unshift(createVector(nextX, nextY));
    this.bodyalpha[0] = 0;
  }
  this.display = function() {
    for(index in this.body) {
      fill(125,this.bodyalpha[index]);
      noStroke();
      rect(this.body[index].x * gridSize, this.body[index].y * gridSize, gridSize, gridSize);
    }
  }
  this.alphaupdate = function() {
    for(index in this.body) {
      if(this.bodyalpha[index] < 255){
        this.bodyalpha[index] += 50;
      }
    }
  }
}

function particleObj(){
  this.count = 0;
  this.positions1 = new Array();
  this.positions2 = new Array();
  this.anglelist = new Array();
  this.sizelist = new Array();
  this.speed = 1;
  this.sizedecrease = 0.1;
  this.drawparticle = function(x,y,p_count){
    for (var i = 0 ; i < p_count; i++) {
     this.positions1.push(this.positions1[this.count]);
     this.positions2.push(this.positions2[this.count]);
     this.sizelist.push(this.sizelist[this.count]);
     this.anglelist.push(this.anglelist[this.count]);
     this.positions1[this.count] = createVector(x * gridSize,y * gridSize);
     this.positions2[this.count] = createVector(5);
     this.sizelist[this.count] = random(20,30);
     this.anglelist[this.count] = random(PI*2);
     this.count += 1;
    }
  }
  this.update = function(){
    for (var i = 0; i < this.count; i++){
      if(this.sizelist[i] > 1){
        this.sizelist[i] -= this.sizedecrease;
      }
      else {
        this.sizelist[i] = 1;
      }
    }
  }
  this.display = function(){
    for (var i = 0; i < this.count; i++){
      translate(this.positions1[i].x,this.positions1[i].y)
      rotate(this.anglelist[i]);
      this.positions2[i].x += this.speed;
      translate(this.positions2[i].x,0)
      noFill();
      stroke(0, 200, 200);
      strokeWeight(5);
      rect(0,0,this.sizelist[i],this.sizelist[i]);
      translate(-this.positions2[i].x,0)
      rotate(-this.anglelist[i]);
      translate(-this.positions1[i].x,-this.positions1[i].y);
    }
  }
}

function stringObj(string){
  this.string = string;
  this.x = width/2;
  this.y = height/2;
  this.size = 100;
  this.offset = 5;
  this.mass = (this.size - 100) / 100;
  this.update = function(string){
    this.string = string;
    if(this.size > 100){
      this.size -= this.offset;
    }
    this.offset -= this.mass;
  }
  this.pom = function(){
    this.size = 150;
    this.offset = 5;
  }
  this.display = function(){
    fill(0,200,200);
    textSize(this.size);
    textAlign(CENTER,CENTER);
    text(this.string,this.x,this.y);
  }
}

function keyPressed() {
  if(gamerunning == false) {
    gamerunning = true;
    setup();
  }
  switch (keyCode) {
    case LEFT_ARROW:
      if (snake.direction.x != 1){
        snake.moveLeft();
      }
      break;
    case RIGHT_ARROW:
      if (snake.direction.x != -1){
        snake.moveRight();
      }
      break;
    case UP_ARROW:
      if (snake.direction.y != 1){
        snake.moveUp();
      }
      break;
    case DOWN_ARROW:
      if (snake.direction.y != -1){
        snake.moveDown();
      }
      break;
    default:
      break;
  }
}
