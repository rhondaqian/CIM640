var weather;
var face;
var input;
var units = '&units=metric';
var rain = [];
//var emoji = new Emoji(100, 300);
var prevMillis = 0;
var interval = 1;


//function preload() {
//  face = loadImage("a.png");
//}


function setup() {
  createCanvas(500, 450);

  for (i = 0; i < 1000; i++) {
    rain[i] = new Rain(random(10, 750), random(10, -20000));
  }
}



function draw() {
  
    background(90, 150, 190);
    //noStroke();
    //fill(255);
    ellipse(mouseX, 300, humid, humid);
     image(face, mouseX, 280, humid, humid);

    emoji.x = mouseX;
    emoji.draw();


if(millis() - prevMillis >= interval){
    for (i = 0; i < 200; i++) {
      rain[i].drawRain();
      rain[i].ripple();
//      if (emoji.catch(rain[i])) {
//        rain.splice(i, 1);
//
//      }
    }
            prevMillis = millis();
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
    if (this.y > 400) {
      this.len = this.len - 5;
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

//function Emoji(x, y) {
//  this.x = x;
//  this.y = y;
//  this.draw = function() {
//    //fill(255);
//    //ellipse(this.x, this.y, 50, 50);
//    image(face, this.x, this.y, 60, 60);
//  };
  this.catch = function(rain) {
    if (rain.y > this.y - 50) {
      if (rain.x < this.x + 50 && rain.x > this.x - 50) {
//        return true;
//      } else {
//        return false;
//      }
//    }
//  };
//
//}