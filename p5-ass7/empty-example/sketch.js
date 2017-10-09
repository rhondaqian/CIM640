var posX = 0;
var posY = 0;

function setup(){
    createCanvas(500,500);
      background("grey");
  
    
    posX =250;
    posY = 250;
    
}

function draw(){
   noStroke();
    stroke(0);
   
    fill("black");

    ellipse(posX,posY,120,95);


     fill("white");
  arc(posX+25, posY-5, 40, 40, 0, PI+HALF_PI, CHORD);
arc(posX-25, posY-5,40,40,PI+HALF_PI, PI, CHORD);
    arc(posX, posY+5, 50, 50, 45, 40, HALF_PI);

fill("black");
        arc(posX+60, posY-45, 80, 80, HALF_PI, PI);
    arc(posX-60, posY-45, 80,80, 0,HALF_PI);
      ellipse(posX +20, posY -5, 5,30);
    ellipse(posX -20, posY -5, 5,30);
    fill("white");
    noStroke();
         arc(posX+50, posY-38, 40, 40, HALF_PI, PI);
        arc(posX-50, posY-38, 40,40, 0,HALF_PI);  
    rect(posX-2, posY+15 ,4,12);

    quad(posX-8, posY+12, posX, posY+6, posX+8, posY+12, posX, posY+18);

   
}
