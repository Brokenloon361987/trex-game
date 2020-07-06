var fixedRec , movingRec ;


function setup() {
  createCanvas(800,400);
  fixedRec = createSprite(200, 250, 50, 50);
  fixedRec.shapeColor = "green";
  fixedRec.velocityY = 5;
  movingRec = createSprite(200, 400, 50, 50);
  movingRec.shapeColor = "green";
  movingRec.shapeColor = "green";
  movingRec.velocityY = -5;

}

function draw() {
  background(255,255,255); 
  // movingRec.x = World.mouseX;
  // movingRec.y = World.mouseY;


  // if(movingRec.x - fixedRec.x < fixedRec.width/2 + movingRec.width /2
  //   && fixedRec.x - movingRec.x < fixedRec.width/2 + movingRec.width /2
  //   &&movingRec.y - fixedRec.y < fixedRec.height/2 + movingRec.height /2
  //   && fixedRec.y - movingRec.y < fixedRec.height/2 + movingRec.height /2){
  //   fixedRec.shapeColor = "red";
  //   movingRec.shapeColor = "red";

  // }else{
  //   fixedRec.shapeColor = "green";
  //   movingRec.shapeColor = "green";

  // }
   
  if(movingRec.x - fixedRec.x < fixedRec.width/2 + movingRec.width /2
       && fixedRec.x - movingRec.x < fixedRec.width/2 + movingRec.width /2){
    movingRec.velocityX =  movingRec.velocityX *(-1);
    fixedRec.velocityX =  fixedRec.velocityX *(-1);

   }
   if(movingRec.y - fixedRec.y < fixedRec.width/2 + movingRec.width /2
    && fixedRec.y - movingRec.y < fixedRec.width/2 + movingRec.width /2){
 movingRec.velocityY =  movingRec.velocityY *(-1);
 fixedRec.velocityY =  fixedRec.velocityY *(-1);

}
  drawSprites();
}