var interfaceItems = [];
var pics = [];
var brushSize = 10;


function preload(){
    pics.push(loadImage("assets/01.jpg"));
    pics.push(loadImage("assets/man1.png"));
}
function setup(){
  createCanvas(400,400);

  interfaceItems.push(new interface(100,100,50,50,pics[0]));

  interfaceItems.push(new interface(200,100,50, 50, pics[1]));
}


function draw(){
  
  interfaceItems[0].check();
  interfaceItems[0].display();
  interfaceItems[1].check();
  interfaceItems[1].display();
  //console.log(interfaceItems[0].check());
}

function mousePressed(){
  if(interfaceItems[0].check() == true){
    console.log("pressed red button");
    brushSize++;
  }

  if(interfaceItems[1].check() == true){
    brushSize--;
  }
}


function interface(tempX, tempY, tempBoxSize, tempBoxSize, tempImage){
  this.x  = tempX;
  this.y = tempY;
  this.boxSize = tempBoxSize;
  this.img=tempImage;
  this.overlay = false;

  this.display = function(){
   image(this.img, this.x, this.y, this.boxSize, this.boxSize);



    if(this.overlay == true){
      fill(127,200);
      rect(this.x, this.y, this.boxSize, this.boxSize);
    }
  }

  this.check = function(){
    if(mouseX > this.x && mouseX < (this.x + this.boxSize) && mouseY > this.y && mouseY < (this.y + this.boxSize)){
      this.overlay = true;
      return true;
    }else{
      this.overlay = false;
      return false;
    }
  }

}