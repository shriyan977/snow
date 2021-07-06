var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
  var particles = [];


  function preload () {
  bg=loadImage("snow1.jpg")
  



}




function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world; 
 snowbg= createSprite(400, 200, 50, 50);
snowbg.addImage(bg)

}

function draw() {
  background(255,255,255);  
  drawSprites();

  Engine.update(engine);
  if(frameCount%55==0)
  particles.push(new Particle(random(370,430),10))
  for (var i = 0; i < particles.length; i++) {
    particles[i].display();   
    }





}
