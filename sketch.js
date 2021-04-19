const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var line1,line2,line3;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,400,1200,20)

    bird = new Bird(100,100,50,50);

   line1 = createSprite(700,300,100,20);

}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();
    bird.display();
   

   drawSprites();
}