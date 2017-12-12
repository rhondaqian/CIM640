var pics=[];
var san;
var rain = [];
var prevMillis = 0;
var interval = 1;
var emoji= new Emoji(50,300);
var button;
var movement =false;

function preload() {
  san = loadImage("assets/01.jpg");
}


function setup() {
  createCanvas(500, 450);
    noCursor();
pics[0] = loadImage("assets/01.jpg");


   button= createButton('rain');
  button.position(100,400);
    button.mousePressed(movement=true);

  for (i = 0; i < 1000; i++) {
    rain[i] = new Rain(random(10, 600), random(10, -50000));
  }
       
    
}



function draw() {
  
    background(90, 150, 190);
      if (movement==true){
         
      
    for (i = 0; i < height; i++)
          {
      rain[i].drawRain();
      rain[i].ripple();
     if(emoji.catch(rain[i])){
         rain.splice(i,1);}
  emoji.x = mouseX;
  emoji.draw();
   
  }
      }
   interfaceItems[0].check();
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
    if (this.y > 400) {
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
    if (this.y > 400) {
      ellipse(this.x, 400, this.r * 2, this.r / 2);
      this.r++;
      this.opacity = this.opacity - 2;
    }
  };
}


//mousepress
//function mousePressed(){
// if(interfaceItems[0].check()==true){
//movement =true;
//}
//}

    
    function Emoji(x, y) {
  this.x = x;
  this.y = y;
  this.draw = function() {
    
    image(san, this.x, this.y, 50, 50);
  };
  this.catch = function(rain) {
    if (rain.y > this.y - 50) {
      if (rain.x < this.x + 50 && rain.x > this.x - 50) {
        return true;
      } else {
        return false;
      }
    }
  };

}


