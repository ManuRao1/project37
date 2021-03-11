var canvas;
var gameState = 0;
var contastentCount;
var database;
var quiz;
var questions;
var contestant;

function setup(){
  canvas = createCanvas(850,400);

  quiz = new Quiz();
  database = firebase.database();
}


function draw(){
  background("pink");

  
}
