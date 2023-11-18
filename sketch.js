
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,rope,ground,block
var gameState

var play = 1
var end = 2
var start = 0

var sp




function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;

  var ball_properties = {
    restitution:0.95
  }

  ball = Bodies.circle(100,20,35,ball_properties)
  World.add(world,ball)
  ground = Bodies.rectangle(600,500,1200,20,{isStatic:true})
  World.add(world,ground)
  
  //block = new Level(100,100,100,10)
  block2 = new Level(windowWidth/2,windowHeight-5,windowWidth+5,15)

  leftWall = new Level(windowWidth-windowWidth,windowHeight/2,30,windowHeight)
  rightWall = new Level(windowWidth,windowHeight/2,30,windowHeight)
  topWall = new Level(windowWidth/2,windowHeight-windowHeight,windowWidth,30)
  bottomWall = new Level(windowWidth/2,windowHeight,windowWidth,30)

  

  //rope = new Rope(6,{x:30,y:30})
  //Matter.Composite.add(rope.body,ball);

  //ball_con = new Link(rope,ball)
  
  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,35)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,1200,20)

  gameState = start

  //block.show()
  block2.show()

  leftWall.show()
  rightWall.show()
  topWall.show()
  bottomWall.show()
  
  

  //rope.show()


  if(keyIsDown(RIGHT_ARROW)){
    horizontalRightForce()
  }
  if(keyIsDown(LEFT_ARROW)){
    horizontalLeftForce()
  }
  if(keyIsDown(UP_ARROW)){
    verticalTopForce()
  }
  if(keyIsDown(DOWN_ARROW)){
    verticalBottomForce()
  }
  if(ball.y<=2){
    ball.y=2
  }

  //if(keyIsDown("A")){
    //sp.x = sp.x+2
  //}

  if(gameState == start){
    textSize(100)
    text("Hello, enjoy the game,",windowWidth/2-100,windowHeight/2)
    text("press arrow keys to continue")
  }

  if(keyIsDown(LEFT_ARROW||RIGHT_ARROW||UP_ARROW||DOWN_ARROW)){
    gameState = play
  }
  
}

function horizontalRightForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.010,y:0})
}

function horizontalLeftForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.010,y:0})
}

function verticalTopForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.010})
}

function verticalBottomForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.010})
}

function play(){

}

function start(){

}

function end(){

}


