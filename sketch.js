
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,Log1;
var DustbinImg,Bin;
function preload()
{
	DustbinImg=loadImage("dustbin.png")
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	Bin=createSprite(1300,570,20,20)
	Bin.addImage(DustbinImg)

	ground=new Ground(800,660,1600,10)
	paper=new  Paper(100,630,30)

	

	Log1=new  Dustbin(1300,650,120,10)
	Log2=new  Dustbin(1245,580,10,130)
	Log3=new  Dustbin(1355,580,10,130)
	


	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(255);
  
   ground.display()
   paper.display()

  drawSprites();
 
}
function keyPressed() {
if (keyCode===UP_ARROW) {
	Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-50});
}
}





