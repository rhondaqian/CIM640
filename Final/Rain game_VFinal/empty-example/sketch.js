var rain = [];
var umbrella = new Umbrella(50, 420);
var movement = false;
var movementUB = false;
var movement3 = false;
var movement4 = false;
var movement5 = false;
var surprises = ["movementUB", "movement3", "movement4", "movement5"];
var san;
var cat, cat2, cat3, cat4, cat5;
var currentCat;
var song1, song2, song3;
var bgm;
var interfaceItems = [];
var pics = [];
var bg, bg2;
var currentbg;
var text;

var surprise;

function preload() {
    san = loadImage("assets/san.png");
    cat = loadAnimation("assets/man1.png", "assets/man1.png", "assets/man2.png", "assets/man2.png");
    cat2 = loadAnimation("assets/b1.png", "assets/b2.png", "assets/b3.png", "assets/b4.png");

    cat3 = loadAnimation("assets/c1.png", "assets/c2.png", "assets/c3.png", "assets/c4.png");

    cat4 = loadAnimation("assets/d1.png", "assets/d2.png", "assets/d3.png", "assets/d4.png");

    cat5 = loadAnimation("assets/e1.png", "assets/e2.png", "assets/e3.png", "assets/e4.png");
    text = loadAnimation("assets/check1.png", "assets/check1.png", "assets/check2.png", "assets/check2.png");
    song1 = loadSound("assets/1.mp3");
    song2 = loadSound("assets/2.mp3");
    song3 = loadSound("assets/3.mp3");

    pics.push(loadImage("assets/cloud.png"));
    pics.push(loadImage("assets/sun.png"));
    pics.push(loadImage("assets/mailbox2 copy.png"));
    pics.push(loadImage("assets/erase.png"));

}

function setup() {
    createCanvas(600, 700);

    bg = loadImage("assets/background1.jpg");
    bg2 = loadImage("assets/background2.jpg");
    currentbg = bg;

    currentCat = cat;


    bgm = song1;
    bgm.play();


    for (i = 0; i < 20000; i++) {
        rain[i] = new Rain(random(10, 800), random(10, -50000));
    }

    interfaceItems.push(new interface(145, 18, 124, 61, pics[0]));
    interfaceItems.push(new interface(450, 33, 64, 76, pics[1]));
    interfaceItems.push(new interface(274, 413, 63, 191, pics[2]));
    interfaceItems.push(new interface(7, 360, 100, 85, pics[3]));

}

function draw() {

    background(currentbg);
    animation(currentCat, mouseX + 40, 535);


    interfaceItems[0].check();
    interfaceItems[0].display();
    interfaceItems[1].check();
    interfaceItems[1].display();
    //    interfaceItems[2].check();
    //    interfaceItems[2].display();
    //    interfaceItems[3].check();
    //    interfaceItems[3].display();

    if (movement == true) {

        for (i = 0; i < height; i++) {
            rain[i].drawRain();
            rain[i].ripple();

            animation(text, 305, 358);
            interfaceItems[2].check();
            interfaceItems[2].display();
            interfaceItems[3].check();
            interfaceItems[3].display();
            currentCat = cat2;
            currentbg = bg2;

            if (movement3 == true) {
                currentCat = cat3;
            }

            if (movement4 == true) {
                currentCat = cat4;
            }

            if (movement5 == true) {
                currentCat = cat5;
            }

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
        currentbg = bg;
    }






    if ((interfaceItems[0].check() == true) || (interfaceItems[1].check() == true) || (interfaceItems[2].check() == true) || (interfaceItems[3].check() == true)) {
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
        if (this.y > 635) {
            this.len = this.len - 15;
        }
        if (this.len < 0) {
            this.len = 0;
        }
    };

    this.ripple = function () {
        strokeWeight(2);
        colorMode(RGB);
        stroke(255, 255, 255, this.opacity);
        noFill();
        if (this.y > 635) {
            ellipse(this.x, 645, this.r * 2, this.r / 2);
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
        var surprise = random(surprises);


        if (surprise == "movementUB") {
            movementUB = true;
            movement3 = false;
            movement4 = false;
            movement5 = false;
        }

        if (surprise == "movement3") {
            movement3 = true;
            movement4 = false;
            movementUB = false;
            movement5 = false;
        }

        if (surprise == "movement4") {
            movement4 = true;
            movement3 = false;
            movementUB = false;
            movement5 = false;
        }

        if (surprise == "movement5") {
            movement5 = true;
            movement3 = false;
            movementUB = false;
            movement4 = false;

        }

        bgm.stop();
        bgm = song3;

    }

    if (interfaceItems[3].check() == true) {
        movementUB = false;
        movement5 = false;
        movement3 = false;
        movement4 = false;
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
