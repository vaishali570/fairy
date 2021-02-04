var fairy,fairyImg;
var star,starImg;
var starNight;

function preload(){
 fairyImg=loadImage("images/fairy1.png");
 starImg=loadImage("images/star.png")
 starNight=loadImage("images/starnight.png")
 
}
function setup() {
  createCanvas(800, 750);
  
 fairy=createSprite(50,150);
 fairy.addImage("fairy",fairyImg);

 star=createSprite(25,100);
 star.addImage("star",starImg);



}


function draw() {
  
  background.addImage("background",starNight)

if (keydown_leftArrow){
  fairy.velocityX=-4;
}

if(keyDown_downArrow){
  fairy.velocityY=-5;
}

  
  drawSprites();
}