var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var paper;
var dustbin;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1700, 700);

    
	engine = Engine.create();
	world = engine.world;
	paper=new Paper(100,height/2,30)
	dustbin=new Dustbin()
	groundsprite=createSprite(width/2,690,width,10);
	Engine.run(engine);

	//Create the Bodies Here.
	ground=Bodies.rectangle(width/2,690,width,10,{isStatic:true})

	World.add(world,ground)


	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
	groundsprite.x=ground.position.x;
	groundsprite.y=ground.position.y;
  dustbin.display();
  paper.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-100})
		console.log("#1")
	}
}


