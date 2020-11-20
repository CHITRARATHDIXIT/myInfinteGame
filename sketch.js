var rocket,rocketImage
var galaxy,galaxyImage
var stone,stoneImage;
var score=0;
var stoneGroup;


function preload(){
rocketImage = loadImage("roket-removebg-preview.png");
glaxyImage = loadImage("galaxy.jpg");
stoneImage = loadImage("stone-removebg-preview.png");
  
}

function setup() {
createCanvas(300,300);
  
galaxy = createSprite(200,200,10,10);
galaxy.addImage("glaxy" , glaxyImage);
galaxy.scale=2;

  
rocket = createSprite(70,200,10,10);
rocket.addImage("rocket" , rocketImage);
rocket.scale=0.4;

  
stoneGroup = new Group();
  
  
  
  
  
  

}

function draw() {
background(220);
 
  rocket.setVelocity(0,0);
  
  
  
    rocket.debug = true
  
 if(keyDown(UP_ARROW)){
   rocket.velocityY=-2;
 } 
  
  
 if(keyDown(DOWN_ARROW)){
   rocket.velocityY=2;
 } 

  
  
  
 if(stoneGroup.isTouching(rocket)){
    rocket.setVelocity(0,0);
    stone.lifetime=-100;
    stoneGroup.setVelocityEach(0,0);
      stoneGroup.setLifetimeEach(-1);
      text(" GAME OVER",200,200);
 } 
  
  
  text(" GAME OVER",200,200);
  

 rocket.VelocityY=0;
rocket.velocityX=0; 
  
  
 spawnStone(); 
  
  
  
  
drawSprites(); 
}

function spawnStone(){
if(frameCount % 60 === 0){
stone = createSprite(400,200,10,10);
stone.addImage("stone" , stoneImage);
stone.scale=0.23;
stone.velocityX=-2;
stone.y = Math.round(random(10,270));  
stone.debug = true;  
stoneGroup.add(stone); 
stone.lifetime=200;  
  
  
  
  
  
  
  

}    
}













