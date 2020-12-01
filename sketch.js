var frect, mrect
var rect1,rect2,rect3,rect4

function setup() {
  createCanvas(800,400);
  frect=createSprite(400, 200, 50, 50);
  frect.shapeColor= "cyan"
  mrect=createSprite(30,200,50,50);
  mrect.shapeColor= "red"
  mrect.velocityX = 4
  // with everyframe the mrect.x will increase by 4

  rect1=createSprite(100, 200, 50, 50);
  rect2=createSprite(200, 200, 50, 50);
  rect3=createSprite(300, 200, 50, 50);
  rect4=createSprite(600, 200, 50, 50);

}

function draw() { 
  background(255,255,255); 


  /*if(isTouching(mrect,rect1)){
      mrect.shapeColor = "green"
  }else if(isTouching(mrect,rect2)){
      mrect.shapeColor = "green"
  } else if(isTouching(mrect,rect3)){
    mrect.shapeColor = "green"
  } else if(isTouching(mrect,rect4)){
    mrect.shapeColor = "green"
  } else 
  {
    mrect.shapeColor= "red"
  }*/


  /*mrect.x=mouseX
  mrect.y=mouseY*/

  edges=createEdges()
  console.log(edges[0])
  bounceOff(mrect,edges[3])
  bounceOff(mrect,edges[2])
  

  drawSprites();
}

