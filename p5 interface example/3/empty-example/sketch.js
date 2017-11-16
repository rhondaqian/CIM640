var interfaceItems=[];
var brushSize=10;
var value=215;
var value2=255;
var bubbleX = 150;
var bubbleY =300;

function setup() {
    createCanvas(400, 400);
    noStroke();
    interfaceItems.push(new interface(100,100,40,60, color(255,182,193)));
    interfaceItems.push(new interface(200,100,40,60, color(135,206,250)));
  
}

  function draw(){
      noStroke();
     fill(255,value,0);
      ellipse(mouseX,mouseY,brushSize,brushSize);
      interfaceItems[0].check();
      interfaceItems[0].display();
         interfaceItems[1].check();
            interfaceItems[1].display();
      fill(value2);
ellipse(bubbleX,bubbleY,100,50);
  
 }

        function mousePressed(){
          if(interfaceItems[0].check()==true){
              console.log("pressed button");
             brushSize++;
              value= 165;
              value2=255;
               bubbleX++;
              bubbleY++;
          }
            if(interfaceItems[1].check()==true){brushSize--;
                                               value=215;
                                               value2=0;
                                               bubbleX--;
                                               bubbleY--;}
             
    
        }
function mouseMoved() {
  value2 = value2 - 2;
  if (value2 <0) {
    value2 = 255;
  }
}

function interface(tempX,tempY,tempBoxSize1, tempBoxSize2,tempColor){
    
this.x=tempX;
this.y=tempY;
this.boxSize1=tempBoxSize1;
this.boxSize2=tempBoxSize2;
this.setFill=tempColor;
this.overlay=false;
    
    this.display=function(){
        fill(this.setFill);
        rect(this.x,this.y,this.boxSize1,this.boxSize2);
       
        if(this.overlay == true){
           fill(100,100);
        rect(this.x,this.y,this.boxSize1,this.boxSize2); 
        }
    }
    this.check=function(){
        if(mouseX>this.x&&mouseX<(this.x+this.boxSize1)&&mouseY>this.y&&mouseY<(this.y+this.boxSize2)){
            this.overlay=true;
            return true;
           }else{
               this.overlay=false;
               return false;}
        
    }
}
