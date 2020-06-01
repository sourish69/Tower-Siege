const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, polygon, polygonImg;
function preload() {

}

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,350,1200,20);
    platform = new Ground(150,270,50,50);

    polygon1 = new Polygon(100,240,30,30);
    box1 = new Box(530,235,30,40);
    box2 = new Box(560,235,30,40);
    box3 = new Box(590,235,30,40);
    box4 = new Box(620,235,30,40);
    box5 = new Box(650,235,30,40);
    box6 = new Box(560,195,30,40);
    box7 = new Box(590,195,30,40);
    box8 = new Box(620,195,30,40);
    box9 = new Box(590,155,30,40);
    //box10 = new Box(100,240,30,30); 
    
    slingshot = new SlingShot(polygon1.body,{x:150,y:200});
}

function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    //pig1.display();
    //log1.display();

    box3.display();
    box4.display();
    //pig3.display();
    //log3.display();

    box5.display();
    //log4.display();
    //log5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    polygon1.display();
    //bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
    //rect(polygon.position.x,polygon.position.y,30,30);
}

function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}