var box;
function setup() {
  createCanvas(400,400);
box=createSprite(180,180,20,20)
box.shapeColor="blue";
}

function draw() 
{
  background(30);
  if (keyIsDown(DOWN_ARROW)){
    background("red");
  }
  if (keyIsDown(UP_ARROW)){
    background("indigo");
  }
  if (keyIsDown(RIGHT_ARROW)){
    background("green");
  }
  if (keyIsDown(LEFT_ARROW)){
    background("blue");
  }
  drawSprites;
}




