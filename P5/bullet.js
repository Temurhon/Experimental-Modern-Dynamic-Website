
function Bullet(x, y, h, w){
  this.x = x+4;
  this.y = y-100;
  this.h = 2;
  this.w = 100;

    
if((this.x >= enemy.x) && (this.x <= enemy.x + enemy.w)){//collision between the bullet and the enemy.
    console.log("hello");
    background(xxx,0,0);
    xxx+=0.3;
    enemy.life -= 1;
   player.score += 1;
} else{
  xxx === 0;
}   
    
    if((this.x >= enemy.x) && (this.x <= enemy.x + enemy.w)){
        console.log("hurts");
        life-=1;
    }
    
    if(life === 0){
        gamestate = 3;
    }
    
    
  this.appear = function(){
  	noStroke();
     fill(255, 228, 181);
   // line(128, 30, 0);
  rect(this.x, this.y, this.h, this.w); 
  }

this.go = function() {

  		this.y = this.y -70; //bullet moves by 1 px every frame
  	}
  
  
  
  }//construction function is a function as an object
   


