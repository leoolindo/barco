
function preload(){
 navegando = loadAnimation("ship-1.png", "ship-2.png")
oceano = loadImage("sea.png")
frameRate(12)

}

function setup(){
  createCanvas(400, 400);
  mar = createSprite(400, 200, 10, 10)
  mar.addImage(oceano)
  mar.scale = 0.25
  barco = createSprite(140, 250, 20, 20)
  barco.addAnimation("navegando", navegando)
  barco.scale = 0.3
  mar.velocityX = -10
} 

function draw() {
  background("blue");
  drawSprites();
  if (mar.x < 0) { 
  mar.x = mar.width / 10
  }
  console.log(mar.x);
}
