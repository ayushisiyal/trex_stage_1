
var trex ,trex_running;
var ground;

function preload(){

groundimg= loadImage("ground1.png");
trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex= createSprite(100,140,20,30);
trex.addAnimation( "running",trex_running);
trex.scale=0.5;
 ground= createSprite(300, 180,600,10);
 ground.addImage(groundimg);
}

function draw(){
  background("white")
  
  drawSprites();
}
