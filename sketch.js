var START=0;
var PLAY=1;
var gameState=START;
var canvas;
var frame,frameImg;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music=loadSound("music.mp3");
    frameImg=loadImage("start background.jpg");
    blue_frame=loadImage("blue-frame.jpg");
    orange_frame=loadImage("orange-frame.jpeg");
    red_frame=loadImage("red-frame.jpg");
    green_frame=loadImage("green-frame.jpg");
    startImg=loadImage("game start.jpg");
}


function setup(){
    canvas = createCanvas(800,600);
  
    frame=createSprite(400,300);
    

    block1 = createSprite(100,580,190,30);
    block1.shapeColor = "blue";
    block1.visible=false;

    block2 = createSprite(300,580,190,30);
    block2.shapeColor = "orange";
    block2.visible=false;
  
    block3 = createSprite(500,580,190,30);
    block3.shapeColor = "red";
    block3.visible=false;

    block4 = createSprite(700,580,190,30);
    block4.shapeColor = "green";
    block4.visible=false;

    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = "white";
    ball.visible=false;
}

function draw() {
    background(rgb(169,169,169));
    if(gameState==START){
      frame.addImage(startImg);
      if(mousePressedOver(frame)){
        gameState=PLAY;
        ball.velocityX=3;
        ball.velocityY=3;
        ball.visible=true;
        block1.visible=true;
        block2.visible=true;
        block3.visible=true;
        block4.visible=true;
        frame.addImage(frameImg);
        frame.scale=0.38;
      }
    }
    if(gameState==PLAY){
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
        frame.addImage(blue_frame);
        frame.scale=1.35;
    }

    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "orange";
        music.play();
        frame.addImage(orange_frame);
        frame.scale=0.99;
    }
  
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "red";
        music.play();
        frame.addImage(red_frame);
        frame.scale=1.6;
    }
  
    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "green";
        music.play();
        frame.addImage(green_frame);
        frame.scale=0.6;
    }
  }

    drawSprites();
    if(gameState==START){
      textSize(20);
      fill("white");
      text("Tap to begin.",390,500);
    }
}
