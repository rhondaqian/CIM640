var rain = [];
//var prevMillis = 0;
//var interval = 1;
var umbrella = new Umbrella(50, 420);
var movement = false;
var movementUB = false;
var san;
var cat, cat2;
var currentCat;
var song1, song2, song3;
var bgm;
var interfaceItems = [];
var pics = [];

function preload() {
    san = loadImage("assets/san.png");
    cat = loadAnimation("assets/man1.png", "assets/man1.png", "assets/man2.png", "assets/man2.png");
    cat2 = loadAnimation("assets/b1.png", "assets/b2.png", "assets/b3.png", "assets/b4.png");
    song1 = loadSound("assets/1.mp3");
    song2 = loadSound("assets/2.mp3");
    song3 = loadSound("assets/3.mp3");

    pics.push(loadImage("assets/cloud.png"));
    pics.push(loadImage("assets/sun.png"));
    pics.push(loadImage("assets/object1.png"));
    pics.push(loadImage("assets/object2.png"));

}

function setup() {
    createCanvas(600, 700);
    //    noCursor();


    currentCat = cat;

    bgm = song1;
    bgm.play();


    for (i = 0; i < 20000; i++) {
        rain[i] = new Rain(random(10, 800), random(10, -50000));
    }

    interfaceItems.push(new interface(135, 10, 280, 100, pics[0]));
    interfaceItems.push(new interface(480, 10, 100, 100, pics[1]));
    interfaceItems.push(new interface(10, 635, 70, 50, pics[2]));
    interfaceItems.push(new interface(500, 625, 57, 67, pics[3]));

}

function draw() {

    background(90, 150, 190);
    animation(currentCat, mouseX + 40, 540);

    interfaceItems[0].check();
    interfaceItems[0].display();
    interfaceItems[1].check();
    interfaceItems[1].display();
    interfaceItems[2].check();
    interfaceItems[2].display();
    interfaceItems[3].check();
    interfaceItems[3].display();

    if (movement == true) {

        for (i = 0; i < height; i++) {
            rain[i].drawRain();
            rain[i].ripple();
            currentCat = cat2;

            if (movementUB == true) {
                if (umbrella.catch(rain[i])) {
                    rain.splice(i, 1);
                }
                umbrella.x = mouseX;
                umbrella.draw();
                currentCat = cat;
            }
        }
    }

    if (movement == false) {
        currentCat = cat;
    }

if ((interfaceItems[0].check() == true) || ( interfaceItems[1].check() == true) || ( interfaceItems[2].check() == true)|| ( interfaceItems[3].check() == true)){
        cursor(HAND);
	  } else {
    cursor(ARROW); 
	  }
   
}

function Rain(x, y) {
    this.x = x;
    this.y = y;
    this.gravity = 1;
    this.len = 35;
    this.r = 0;
    this.opacity = 200;

    this.drawRain = function () {
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

    this.ripple = function () {
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


function Umbrella(x, y) {
    this.x = x;
    this.y = y;
    this.draw = function () {

        image(san, this.x, this.y, 150, 115);
    };
    this.catch = function (rain) {
        if (rain.y > this.y - 20) {
            if (rain.x < this.x + 155 && rain.x > this.x - 5) {
                return true;
            } else {
                return false;
            }
        }
    };

}

function mousePressed() {
    if (bgm.isPlaying()) {
        bgm.pause();
    } else {
        bgm.loop();
    }

    if (interfaceItems[0].check() == true) {
        movement = true;
        bgm.stop();
        bgm = song2;

    }

    if (interfaceItems[1].check() == true) {
        movement = false;
        bgm.stop();
        bgm = song1;

    }

    if (interfaceItems[2].check() == true) {
        movementUB = true;
        bgm.stop();
        bgm = song3;

    }

    if (interfaceItems[3].check() == true) {
        movementUB = false;
        bgm.stop();
        bgm = song2;

    }
}


function interface(tempX, tempY, tempBoxSize1, tempBoxSize2, tempImage) {
    this.x = tempX;
    this.y = tempY;
    this.boxSize1 = tempBoxSize1;
    this.boxSize2 = tempBoxSize2;
    this.img = tempImage;


    this.display = function () {
        image(this.img, this.x, this.y, this.boxSize1, this.boxSize2);

    }

    this.check = function () {
        if (mouseX > this.x && mouseX < (this.x + this.boxSize1) && mouseY > this.y && mouseY < (this.y + this.boxSize2)) {
            return true;
        } else {

            return false;
        }
    }

}
