const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,600,20,20);
   box1=new Box (900,100,70,70)
   box2=new Box(900,100,70,70)
   box3=new Box(900,100,70,70)
   ball=new Ball(200,200,80,80)
   rope=new Rope(ball.body,{x:500,y:50})
}

function draw(){
    background ("black")
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    ball.display();
    rope.display();
}

function mouseDragged() {
    Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
  }





