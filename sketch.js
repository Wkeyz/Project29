const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var slingShot;
function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    block1= new Box(600,380,30,40);
     block2= new Box(615,380,30,40);
     block3= new Box(630,380,30,40);
     block4= new Box(645,380,30,40);
     block5= new Box(660,380,30,40);
     block6= new Box(675,380,30,40);
     block7= new Box(690,380,30,40);
     block8=new Box(640,350,30,40);
     block9=new Box(610,350,30,40);
     block10=new Box(625,350,30,40);
     block11=new Box(640,350,30,40);
     block12=new Box(655,350,30,40);
     block13=new Box(670,350,30,40);
     block14= new Box(670,310,60,40);
     block15= new Box(610,310,60,40);
     block16= new Box( 640,270,40,40);
     polygon= new Polygon(200,200,20,20);

slingShot= new Slingshot(polygon.body,{x:100,y:200});
     
}

function draw(){
    background("grey");
    Engine.update(engine);
    ground.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
     block8.display();
     block9.display();
     block10.display();
     block11.display();
   block12.display();
     block13.display();
     block14.display();
     block15.display();
    block16.display();
    slingShot.display();
    polygon.display();

    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}




function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stoneObj.body,{x:100,y:200});
		luancherObj.attach(stoneObj.body);
	}
}