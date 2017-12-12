var rain = [];
var prevMillis = 0;
var interval = 1;
var umbrella= new Umbrella(50,420);
var button;
var buttonstop;
var movement =false;
var san;
var cat;

function preload() {
 san = loadImage("assets/san.png");
    cat= loadAnimation("assets/man1.png", "assets/man1.png","assets/man2.png","assets/man2.png");
    cat2=loadAnimation("assets/man3.png", "assets/man3.png","assets/man4.png","assets/man4.png");
}


function setup() {
  createCanvas(600, 700);
 noCursor();

  
   button= createButton('rain');
  button.position(100,720);
    button.mousePressed(check);
    
    buttonstop=createButton('stop');
    buttonstop.position(300,720);
    buttonstop.mousePressed(checkAgain);

  for (i = 0; i < 20000; i++) {
    rain[i] = new Rain(random(10, 800), random(10, -50000));
  }
       
    
}



function draw() {
  
    background(90, 150, 190);
    animation(cat,mouseX+40,540);
    
      if (movement==true){
         
      
    for (i = 0; i < height; i++)
          {
      rain[i].drawRain();
      rain[i].ripple();
     if(umbrella.catch(rain[i])){
         rain.splice(i,1);}
  umbrella.x = mouseX;
  umbrella.draw();
   
  }
      }
  
}



function Rain(x, y) {
  this.x = x;
  this.y = y;
  this.gravity = 1;
  this.len = 35;
  this.r = 0;
  this.opacity = 200;

  this.drawRain = function() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, 1, this.len);
    this.y = this.y + 8;
    if (this.y > 600) {
      this.len = this.len - 15;
    }
    if (this.len < 0) {
      this.len = 0;
    }
  };

  this.ripple = function() {
    strokeWeight(2);
    colorMode(RGB);
    stroke(247, 247, 247, this.opacity);
    noFill();
    if (this.y > 600) {
      ellipse(this.x, 610, this.r * 2, this.r / 2);
      this.r++;
      this.opacity = this.opacity - 2;
    }
  };
}

function check(){
    movement=true;
}

function checkAgain(){
    movement=false;
}
    
    function Umbrella(x, y) {
  this.x = x;
  this.y = y;
  this.draw = function() {
    
    image(san, this.x, this.y, 150, 115);
  };
  this.catch = function(rain) {
    if (rain.y > this.y -20) {
      if (rain.x < this.x + 155 && rain.x > this.x - 5) {
        return true;
      } else {
        return false;
      }
    }
  };

}


