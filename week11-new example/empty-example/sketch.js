
var bubble1;
var bubble2;
var multiBubble =[];

function setup() {
    createCanvas(400, 400);
      //  bubble1=new bubble(random(width),random(height),random(100));
  //  bubble2 = new bubble(random(width), random(height), random(100));
for(var i=0;i<100;i++){
    var bubbleC=color(random(256),random(256),random(256));
    multiBubble.push(new bubble(random(width),random(height),random(100),bubbleC));
 

}
}


function draw() {
    background(255);
   // bubble1.display();
    //        bubble2.display();
 //   multiBubble[49].display();
    for(var i=0; i<multiBubble.length; i++){
        multiBubble[i].display();
    multiBubble[i].display();
        multiBubble[i].moveX();
        multiBubble[i].moveY();
   
    if(multiBubble[i].checkPosX()==0){
        multiBubble[i].dirX=false;
    }else if(multiBubble[i].checkPosX()==1){multiBubble[i].dirX=true;
                                           }
        
        if(multiBubble[i].checkPosY()==0){
        multiBubble[i].dirY=false;
    }else if(multiBubble[i].checkPosY()==1){multiBubble[i].dirY=true;
    }
    }

}

function bubble(tempX,tempY,tempDiameter,c){
    this.x = tempX;
    this.y = tempY;
    this.diameter= tempDiameter;
    this.color=c;
    this.dirX=tempDirX;    
    
     this.display = function () {
         fill(this.color);
        ellipse(this.x, this.y, this.diameter, this.diameter);}
   
     this.moveX=function(){
if (this.dirX ==true)
          this.x++;}
     else{this.x--;}

    // this.moveY=function(){
        // this.y++;
    // }
       this.checkPosX=function(){
         if(this.x>width){return 0;}
           else if(this.x<0)z{}
     }
}

