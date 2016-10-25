var rockone;
var rocktwo;
var rockthree;
var movingRock;
function preload() {

movingRock = loadImage("img/movingrock.jpg");

}

function setup() {
  createCanvas(640, 460);
  background(255);
  image(movingRock);

  rockone = new Rocksleeve(50, 2, 50);

  rocktwo = new Rocksleeve(100, 4, 170);

  rockthree = new Rocksleeve(150, 6, 290)
}

function draw() {

  image(movingRock, random(width), random (height),random(2), random (3));
  ellipse(320,230,400);

  rockone.display();
  rockone.move();
  //rockone.interact();

  rocktwo.display();
  rocktwo.move();
  //rocktwo.interact();

  rockthree.display();
  rockthree.move();
  //rockthree.interact();

}

function Rocksleeve(rockShelves, rockSpeed, rockXPosition) {
//variables
  this.rockShelves = rockShelves;

  this.speed = rockSpeed;

  this.xPosition = rockXPosition;

  this.fillColor = color(random(255), random(255), random(255));
  var ey = 0;
//screen time
this.display = function() {

    fill(this.fillColor);
    ellipse(this.xPosition, ey, this.rockShelves, this.rockShelves);
    ellipse(this.xPosition-1, ey, this.rockShelves-random(3), this.rockShelves);
    ellipse(this.xPosition-2, ey, this.rockShelves-random(2), this.rockShelves);

};
//speed
this.move = function() {

    //++?
    ey = ey + this.speed;

};
//confusion
/*this.interact = function() {

    if(mouseX > this.xPosition) {
    ey = 0;
    }
};

}
/*function setup(){
  creatCanvas(320, 240);
  background(0);
  starship1 = new Starship(10,2,30);
  starship2 = new Starship(12,21,215);
}

function draw(){
starship1.display();
starship1.move();
starship1.interact();

starship2.display();
starship2.move();
starship2.interact();

}
//constructor
function Starship (tempWingspan, tempSpeed, tempPosition){

this.wingspan = tempWingspan;
this.speed = tempSpeed;
this.xposition = tempPosition;
var ey = 0;
  //different
  //this allows the creation of an insance (that is unique)
  this.display = function(){
    ellipse(this.xposition, ey , this.wingspan);
  };
  this.move = function(){
    ey = ey + this.speed;
  };
  this.interact = function(){
    if(mouseX > this.xPosition){
      ey = 0;
    }
  }
  if(keyIsPressed(){
    fill(this.fillColor);
  }
}
