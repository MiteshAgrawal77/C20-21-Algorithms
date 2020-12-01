function isTouching(recta,rectb){
    if(Math.abs(recta.x - rectb.x) <recta.width/2 + rectb.width/2
    && Math.abs(recta.y - rectb.y) <recta.height/2 + rectb.height/2){
      return true
   }
   else{
     return false
   }
  }
  
  //recta is the moving rectangle whose velocity will be reversed.
  function bounceOff(recta,rectb){
  
    if(Math.abs(recta.x - rectb.x) <recta.width/2 + rectb.width/2
    && Math.abs(recta.y - rectb.y) <recta.height/2 + rectb.height/2){
      console.log(recta.velocityX)
      recta.velocityX = recta.velocityX*-1
      recta.velocityY = recta.velocityY* -1
   }
   
  }

  function createEdges(){
    var top = createSprite(width/2,0,width,1)
    var bottom = createSprite(width/2,height,width,1)
    var left = createSprite(0,height/2,1,height)
    var right = createSprite(width,height/2,1,height)

    top.visible = false
    bottom.visible = false
    left.visible = false
    right.visible = false

   return [top,bottom,left,right]

  }