const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ground,left,right,top1;
var ball;
var b1,b2;


function setup() {
  createCanvas(1600,700);
  engine = Engine.create();
  world = engine.world;
  b1=createImg("right.jpg")
  b1.position(220,30)
  b1.size(50,50)
  b1.mouseClicked(hForce)

  b2=createImg("up.jpg")
  b2.position(20,30)
  b2.size(50,50)
  b2.mouseClicked(vForce)

  /*ground=new Ground(200,390,400,20)
  right=new Ground(390,200,20,400)
  left=new Ground(10,200,20,400)
  top1=new Ground(200,10,400,20)*/

  ground=new Ground(width/2,670,width,20)
  right=new Ground(1350,600,20,120)
  left=new Ground(1100,600,20,120)
  
  var options1={restitution:0.3,isStatic:false,friction:0,density:1.2}
  ball=Bodies.circle(200,100,20,options1)
  World.add(world,ball)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground.show()
  left.show()
  right.show()
  //top1.show()
  ellipse(ball.position.x,ball.position.y,20)
}

function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}

function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}
function keyPressed(){
if(keyCode===UP_ARROW){
  Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
}

}