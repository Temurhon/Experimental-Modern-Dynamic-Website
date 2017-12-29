
function Rain(x,y){
  this.x = 300;
  this.y = 0;
  this.h = 5;
  this.w = 10;
  this.yspeed = 5;

  this.show = function(){
      fill(255);
      line(255);
  line(this.x, this.y, 2, 2);
 
    
  }
  
this.fall = function() {

  		this.y = this.y + 2; //bullet moves by 1 px every frame
  	}
  }
  