var rains = [];
var bullets = []; //array of bullets that will travel from the player's x position.
var balls = [];
var xxx = 0;
var life = 40;
var enemy = {
x:0,
    y:10,
    w:10,
    h:10
    
   
}

var numOfC = 400;//number of the balls it spawns on the canvas
var minCW = 5;//the minimum size of the balls that it produce
var maxCW = 10;//the maximum size of the balls it can produce


console.log();
var gamestate = 0;


var player = {
x: 300,
y: 400,
w: 10,
h: 10,
speed: -10,
score: 0,

 move: function() {
   
   player.y += player.speed;
      player.y+=2;
      //This is to ensure that the speed of the player increases in the y axis, which will allow the player to go down.
}

}


var platform = {
  x: 0,
  y: 600,
  w: 10000,
  h:10
}

var coke;
function preload(){
    coke = loadImage('Coke.png');
}




function setup() {
  createCanvas(1000, 600);
    
 
    
    
      for(var i = 0; i < numOfC; i++){
          var e =NewC(random(width),random(height),
                      random(minCW,maxCW));
          balls.push(e)
          //this for loop is used to create amount of balls in minimum size and maximum size, and they are done in random values
      }
  console.log("working!!!");
 
}
  
  
  

function draw() {
    
    if (gamestate === 0){
        background (0);
        fill(255)
        text("COKE VS PEPSI", width/2-40,height/3);
    text("CLICK ME!!!", width/2-40, height/2);
    }
   else if(gamestate == 1){ 
       
  background(30);
  player.move();
  control();
  character();
  ground();
  border();
  playerCollision();
  keyPressed();
  Score();
showBack();
NewC();

bady();
       
//       for(var m = 0; m < bullets.length; m++){
//enemy[m]();

//}
for(var j = 0; j < bullets.length; j++){
bullets[j].appear();
bullets[j].go();
}
    
 
    }else if(gamestate == 2){
        background (0);
        fill(255,0,0);
    text("LOST", width/2-100, height/2);
        noLoop();
    }else if(gamestate == 3){
        
        fill(0,255,0);
        text("WON", width/2-100,height/2);
        noLoop();
    }
        

    
    
  }

  


//......................................................................Collision between the player and the ground...............................................................................
 function playerCollision(){
 if (((player.x >= platform.x) && (player.x <= platform.w) && (player.y + player.h >= platform.y)) || ((player.x <= 0) && (player.x >= width))) {
 
 // if the player x is greater or equal to the platform x
 
 
 player.y = player.y -2;
 player.speed = player.speed = 0;
 }
 //this will prevent the player from glitching down the platform
 if(player.y > platform.h){
 player.speed = 0;
 
}
//collision between the player and the limitation of the height that it can go to
if(player.y <= 550){
  print("collided")
  player.y = player.y + 1.9;
}               

     if(enemy.x == width){
       gamestate = 2;
     }
          
 }
//...................................................................................................................................................................................................

 //....................................................................border between the canvas............................................................................................................
function border(){
if (player.x > width){
  player.x = 0;
} else if (player.x < 0){    //makes the player come around the border in stead of disappearing
  player.x = width
}
    
}

//.......................................................FUNCTIONS..........................................................................................................................
//......................................................................................control...............................................................
  function control(){
  if (keyIsDown(65))    // "a" key
    player.x-=5;

  if (keyIsDown(68))    //  "d" key
    player.x+=5;

  if (keyIsDown(32))     // "spacebar"
// player.speed = -1;
  player.y-=4;
    player.y = player.y;
  
  }
   // player.y = player.y + player.speed;
//............................................................Shoot...........................
    function keyPressed(){
      if (key === '.'){
      var b = new Bullet(player.x, player.y);
      bullets.push(b);
     // bullets.pop(b);
        
     
    }
       
    }

  
//........................................................................................................................................................................
//.............................................................................score..................................................................

function Score(){
    fill(255);
    textSize(25);
    text("Score:", 11, 60);
text(player.score, 90, 60);


}



//................................................................................................................................................................
//..............................................................................................platform..............................................
function ground(){
   rect(platform.x, platform.y, platform.w, platform.h);
   fill(0)
   line(0)
}
//..............................................................enemy....... FUNCTION...........................................
function showBack(){
    ellipseMode(CORNER);
    stroke(color(255,255,0,5));
    fill(color(255,0,0,20));
  balls.forEach(function(e, i){
    ellipse(e.x,e.y,e.dia);
    e.y -=e.speed;//moves te ball upwards

    if(e.y < 0 -e.dia){
      balls.splice(i, 1);//deletes the object that reverts it back to the bottom
      balls.push(NewC(random(width),height,
                        random(minCW, maxCW)));//respawns it at the bottom of the screen
    }
  })

}

function mousePressed(){
     if(gamestate != 1){

    gamestate = 1;

}

}
function bady(x,y,w,h){
     this.x = x;
  this.y = y;
  this.w = w;
this.h = h;

    fill(255,0,0)
    rect(enemy.x,enemy.y,enemy.w,enemy.h);
    image(coke,enemy.x,enemy.y,enemy.w,enemy.h);
    
      enemy.x = enemy.x +1;
    
    
    
    
}
