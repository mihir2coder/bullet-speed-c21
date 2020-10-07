var bullet,wall;
var speed,weight,thickeness;


function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  speed=random(223,321)
  weight=random(30,52)
  thickeness=random(22,82)
  bullet=createSprite(50,200,50,50)
  bullet.velocityX=speed;
  wall=createSprite(1200,200,thickeness,height/2);
  //wall.shapeColor="red"

}

function draw() {
  background(0);

if (hascollided(bullet,wall)){
  bullet.velocityX=0;

  var damage=0.5* weight*speed/(thickeness*thickeness*thickeness);

  if (damage>10){
    wall.shapeColor=color(255,0,0);

  }

  if (damage<10){
    wall.shapeColor=color(0,255,0);
  }
}
 

  
  
  
  
  drawSprites();
}

function hascollided(bullet1,wall1){
  bulletRightEdge=bullet1.x+bullet1.width;
  wallLeftEdge=wall1.x
  
  if(bulletRightEdge>=wallLeftEdge){
   return true;
  }
return false


}