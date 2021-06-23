

var spacecraft, spacecraftImg1, spacecraftImg2, spacecraftImg3, spacecraftImg4;
var ISS, ISSimg;
var bg 
var hasDocked 
function preload(){
  bg = loadImage("spacebg.jpg")
  spacecraftImg1 = loadImage("spacecraft1.png")
  spacecraftImg2 = loadImage("spacecraft2.png")
  spacecraftImg3 = loadImage("spacecraft3.png")
  spacecraftImg4 = loadImage("spacecraft4.png")
  ISSimg = loadImage("iss.png")
}

function setup() {
  createCanvas(800,400);
  spacecraft = createSprite(Math.round(random(100, 700)),300,100,100)
  spacecraft.addImage("idle",spacecraftImg1)
  ISS = createSprite(200,100,200,200)
  ISS.addImage("iss", ISSimg)
  ISS.scale = 0.6
  hasDocked = false
}

function draw() {
  background(bg);  
  spacecraft.scale = 0.2
  if(!hasDocked){

  if( keyDown("LEFT_ARROW")){
  spacecraft.addImage("left",spacecraftImg3) 
  spacecraft.x += -1 
  }  
  if(keyDown("RIGHT_ARROW")){
  spacecraft.addImage("right", spacecraftImg4)  
  spacecraft.x += 1 
  }
  if(keyDown("UP_ARROW")){
  spacecraft.addImage("up", spacecraftImg1)  
  spacecraft.y += -1 
  }
  if(keyDown("DOWN_ARROW")){
  spacecraft.addImage("down", spacecraftImg2)  
  }
  if(spacecraft.isTouching(ISS)){
  hasDocked = true  
  }
  }
  else{
  text("ship docked succesfully",400, 300,100,100)  
  }
  drawSprites();
}