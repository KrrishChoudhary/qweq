var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var runners,runner1,runner2,runner3,runner4;

var bgImage,  player1Stand,  player1Run,  player1Jump ;

var barrier;

function preload(){

  bgImage = loadImage("bg.jpg");
  player1Stand = loadAnimation("Player1/p1s1.png");
  //player1Run = loadAnimation("p1r1.png", "p1r2.png", "p1r3.png", "p1r4.png");
  //player1Jump = loadAnimation("p1j1.png");


}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
 
  if(playerCount === 4){
    game.update(1);
  }

  if(gameState === 1){
    game.play();
  }
}
