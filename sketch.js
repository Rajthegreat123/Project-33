const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

var divisionHeight = 300;

var particles = [];
var plinkos = [];
var divisions = [];
var cols = 5;
var rows = 5;



function preload()
{
	
}

function setup() 
{
	createCanvas(600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(300, 790, 600, 20);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  if(frameCount % 60 === 0){
	  particles.push(new Particle(random(width / 2 - 10, width / 2 + 10), 10, 10));
	}  

	for (var d = 0; d <= width; d = d + 80){
		divisions.push(new Division(d, height - divisionHeight / 2, 10, divisionHeight));
	}

	for (var p = 50; p <= width; p = p + 100) 
	{
  		plinkos.push(new Plinko(p, 400, 10));
	}


	for (var p = 0; p <= width; p = p + 100) 
	{
  		plinkos.push(new Plinko(p, 350, 10));
	}

	for (var p = 50; p <= width; p = p + 100) 
	{
  		plinkos.push(new Plinko(p, 300, 10));
	}


	for (var p = 0; p <= width; p = p + 100) 
	{
  		plinkos.push(new Plinko(p, 250, 10));
	}

	for (var p = 50; p <= width; p = p + 100) 
	{
  		plinkos.push(new Plinko(p, 200, 10));
	}


	for (var p = 0; p <= width; p = p + 100) 
	{
  		plinkos.push(new Plinko(p, 150, 10));
	}

	for (var p = 50; p <= width; p = p + 100) 
	{
  		plinkos.push(new Plinko(p, 100, 10));
	}

  ground.display();

  for (var i = 0; i < particles.length; i++){
	  particles[i].display();
  }

  for (var p = 0; p < plinkos.length; p++){
	  plinkos[p].display();
  }

  for (var d = 0; d < divisions.length; d++){
	  divisions[d].display();
  }
  
  drawSprites();
 
}



