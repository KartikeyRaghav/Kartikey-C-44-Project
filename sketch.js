var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var form, player, game;
var cars, car, car2, car3, car4;
var track, track_img,ground,ground_img, car1_img, car2_img, car3_img, car4_img;
var scoree,startScreen,gameArea;
var player1Number,player1Dice,player2Dice,player2Number;

function preload(){
}


function setup(){
  noCanvas();
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  // text("");

  if(playerCount === 1){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    scoree = document.querySelector('.score');
    startScreen = document.querySelector('.startScreen');
    startScreen.addEventListener('click', start);
    container = document.querySelector('.container');
    image1 = document.getElementById('check1');

    game.play();
  }

  if(gameState === 2) {
    game.end();
  }
}

function gamePlay() {
  if(gameState === 1) {

    window.requestAnimationFrame(gamePlay);
  }
}

function start() {
  container.classList.remove('hide');
  startScreen.classList.add('hide');

  window.requestAnimationFrame(gamePlay);

  form.reset.position(20,605);
}