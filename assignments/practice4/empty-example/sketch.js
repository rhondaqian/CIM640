var posX = 0;
var posY = 0;
var pics = [];
var targetPosX = [60, 180, 320,440];
var targetPosY = [50,60,35,60];
var bgColor;
var bgImage, bgImage2;
var bgChange, bgChange2;
var CurrentBgImage;




function preload(){
bgImage=loadImage("assets/bg1.jpg");
bgImage2=loadImage("assets/bg2.jpg");
    
}


function setup(){
    createCanvas(500,500);
       bgColor=color("grey");
       bgChange= createButton("evening") ;
    bgChange.position(400,550);
    bgChange.mousePressed(changeBgFunction);
     
    bgChange2= createButton("morning") ;
    bgChange2.position(100,550);
    bgChange2.mousePressed(changeBgFunction2);
   
    currentBgImage=bgImage;
    
  posX = width/2;
  posY = height/2;

    
    pics[0] = loadImage("assets/cat1.jpg");
    pics[1] = loadImage("assets/cat2.jpg");
    pics[2] = loadImage("assets/cat3.png");
  pics[3] = loadImage("assets/cat4.jpg");
}


    
function draw(){

    image(currentBgImage,250,280,550,550);
    
    fill("white");
    noStroke();
    
  if (mouseX > targetPosX[0] - 60 && mouseX < targetPosX[0] + 60 && mouseY > targetPosY[0] - 50 && mouseY < targetPosY[0] + 50) {
        image(pics[0], targetPosX[0], targetPosY[0],120,100);

    } else {
        rect(targetPosX[0], targetPosY[0], 120, 100);
    }

    if (mouseX > targetPosX[1] - 60 && mouseX < targetPosX[1] + 60 && mouseY > targetPosY[1] - 60 && mouseY < targetPosY[1] + 60) {
        image(pics[1], targetPosX[1], targetPosY[1],120,120);

    } else {
        rect(targetPosX[1], targetPosY[1],120,120);
    }

    if (mouseX > targetPosX[2] -70 && mouseX < targetPosX[2] + 70 && mouseY > targetPosY[2] - 35 && mouseY < targetPosY[2] + 35) {
        image(pics[2], targetPosX[2], targetPosY[2],140,70);

    } else {
        rect(targetPosX[2], targetPosY[2], 150, 120);
    }
   
    if (mouseX > targetPosX[3] -60 && mouseX < targetPosX[3] + 60 && mouseY > targetPosY[3] - 60 && mouseY < targetPosY[3] + 60) {
        image(pics[3], targetPosX[3], targetPosY[3],120,120);

    } else {
        rect(targetPosX[3], targetPosY[3], 120, 120);
    }
    
  //the face
   posX=mouseX;
    posY=mouseY;
  
    noStroke();
    rectMode(CENTER);
    imageMode(CENTER);
   
    fill(bgColor);
ellipse(posX,posY,120,95);
  var wiggleX =map(mouseX,0,width,-10,10);
    var wiggleY =map(0,mouseY,height,5,-5);
    
 
     fill("white");
  arc(posX+25, posY-5, 40, 40, 0, PI+HALF_PI, CHORD);
arc(posX-25, posY-5,40,40,PI+HALF_PI, PI, CHORD);
    arc(posX, posY+5, 50, 50, 45, 40, HALF_PI);

fill(bgColor);
        arc(posX+60, posY-45, 80, 80, HALF_PI, PI);
    arc(posX-60, posY-45, 80,80, 0,HALF_PI);
  
    if(mouseY < 250){ ellipse(posX +20+wiggleX, posY-wiggleY -5, 5,30);
    ellipse(posX+wiggleX -20, posY-wiggleY -5, 5,30);
        }
    else{
    ellipse(posX +20+wiggleX, posY -5, 5,30);
    ellipse(posX+wiggleX -20, posY -5, 5,30);
    }
   
    fill("white");
    noStroke();
         arc(posX+50, posY-38, 40, 40, HALF_PI, PI);
        arc(posX-50, posY-38, 40,40, 0,HALF_PI);  
    rect(posX, posY+20 ,4,18);

    quad(posX-8, posY+12, posX, posY+6, posX+8, posY+12, posX, posY+18);
    //the face
    
   
}

function changeBgFunction(){
    currentBgImage=bgImage2;
    
}
function changeBgFunction2(){
    currentBgImage=bgImage;
}
function mousePressed(){
    bgColor= color("black");
}