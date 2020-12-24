
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var log;
function preload()
{
	logImage=loadImage("sprites/dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(400,670,800,20);
	log=new Log(650,630,15,70);
	log2=new Log(750,630,15,70);
	log3=new Log(700,657,100,15);
	paper=new Paper(100,500,18);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);


  ground.display();
  log.display();
  log2.display();
  log3.display();
  image(logImage,625,575,150,100);
  imageMode(CENTER)
  paper.display();
  
  drawSprites();
  
 
}

function keyPressed(){
if (keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-50})
}
}

