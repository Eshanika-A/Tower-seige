const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var polygon, polygonImg, sling;
var g1,g2,g3;
var b1,b2,b3,b4,b5, b6,b7,b8,b9,b10, b11,b12,b13,b14,b15,b16,b17,b18,b19,b20, b21,b22,b23,b24,b25;

function preload(){
    polygonImg=loadImage("polygon.png");
  }

  function setup() {
    createCanvas(1000,500);
  
    polygon= createSprite(350,50,40,40)
    polygon.addImage(polygonImg)

    g1=new Ground(390,300,250,10);
    g2 = new Ground(700,200,250,10);

    b1 = new Box(300,275,30,40);   
    b2 = new Box(330,275,30,40);
    b3 = new Box(360,275,30,40);
    b4 = new Box(390,275,30,40);
    b5 = new Box(420,275,30,40);
    b6 = new Box(450,275,30,40);
    b7 = new Box(480,275,30,40);
    b8 = new Box(330,235,30,40);
    b9 = new Box(360,235,30,40);
    b10 = new Box(390,235,30,40);
    b11 = new Box(420,235,30,40);
    b12 = new Box(450,235,30,40);
    b13 = new Box(360,195,30,40);
    b14 = new Box(390,195,30,40);
    b15 = new Box(420,195,30,40);
    b16 = new Box(390,155,30,40);
    b17 = new Box(640,135,30,40);
    b18 = new Box(670,135,30,40);
    b19 = new Box(700,135,30,40);
    b20 = new Box(730,135,30,40);
    b21 = new Box(760,135,30,40);
    b22 = new Box(670,95,30,40);
    b23 = new Box(700,95,30,40);
    b24 = new Box(730,95,30,40);
    b25 = new Box(700,55,30,40);

    g3=new Ground(500,390,1000,20);

    sling = new Slingshot(this.polygon,{x:100,y:200});
  }

  function draw() {

    background("brown"); 
 
    g1.display();
    g2.display();
    g3.display();
  
    fill("blue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill("pink");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill("cyan");
    block13.display();
    block14.display();
    block15.display();
    fill("yellow");
    block16.display();  
    fill("blue");
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    fill("pink");
    block22.display();
    block23.display();
    block24.display();
    fill("yellow");
    block25.display();

    imageMode(CENTER)
    image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
    polygon.display();
    sling.display();

    fill("white");
    textSize(20);
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",150,50);
    
  }


  function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    sling.fly();
  }
  function keyPressed(){
    if(keyCode === 32){
        sling.attach(this.polygon);
    }
  }