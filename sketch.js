const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1200, 600);	
	
	engine = Engine.create();
	world = engine.world;

	rect1 = new Rect(900,560);

	paper = new Paper(200,300,35);
	
	ground = new Ground(width/2,height-20,1200,12);
	
	Engine.run(engine)
}

function draw() {
  background("black");
  Engine.update(engine);

  rect1.display();
  //rect2.display();
  //rect3.display();
  paper.display();
  ground.display();
  
  keyPressed();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:85, y:-85});
	}
}