var car,wall;
var speed,weight;


function setup() {

 speed=random(55,90);
 weight=random(400,1600)

  createCanvas(1600,400);
  car=createSprite(10, 200, 25, 25);
  wall=createSprite(1500,200,60,200);

  

}

function draw() {

  wall.shapecolor=color(80,80,80);
  
  car.velocityX=speed;

  wall.shapecolor=color(80,80,80);
  if(wall.x-car.x<(car.width+wall.width)/2){
  car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
  if(deformation>180){
  car.shapecolor=color(255,0,0);
  }
  if(deformation<180 && deformation>100 ){
    car.shapecolor=color(230,230,0);
    }
  if(deformation<100){
  car.shapecolor=color(0,255,0);
    }

  }
  background(0,0,0);  
  drawSprites();
}