const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var gameState="onsling";
var backgroundImg;
var bg="sprites/bg1.png";
var score=0;


function preload() {
  getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);
  platform = new Ground(150, 305, 300, 170);
  

  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  pig1 = new Pig(810, 350);
 log1 = new Log(810,260,300, PI/2);

  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);

  log3 =  new Log(810,180,300, PI/2);
  box5 = new Box(810,160,70,70);

  log4 = new Log(760,120,150, PI/7);
  log5 = new Log(850,120,150, -PI/7);
  pig3 = new Pig(810, 220);
  bird = new Bird(100,100);
  sling= new slingShot(bird.body,{x:200,y:50});


  
}

function draw() {
  if(backgroundImg)
  background(backgroundImg); 

textSize(32);
    text("score:"+score,width-300,50);
  Engine.update(engine);
  ground.display();
  platform.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  log1.display();
  log3.display();
  log4.display();
  log5.display();
  pig1.display();
  pig3.display();
  bird.display();
  sling.display();

  //drawSprites();

}
function mouseDragged(){
  if(gameState!=="launch")
   Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
   console.log("manasa")
}
function mouseReleased(){
    sling.fly();
    gameState==="launch";
}
function keyPressed(){
  if(keyCode===32){
    bird.trajectory=[];
    Matter.Body.setPosition(bird.body,{x:200,y:50});
   slingshot.attach(bird.body);
  
  }
}
async function getBackgroundImg(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON=await response.json();
  var hour=responseJSON.datetime.slice(11,13);
  if(hour >= 6 && hour <= 10){
      bg="sprites/bg.png";
  }else{
      bg="sprites/bg2.jpg";
  }
  backgroundImg=loadImage(bg);
  console.log(backgroundImg);
  //cd
}
