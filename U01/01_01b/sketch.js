let radio = 20;
let posX = 200;
let posY = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0,255,0);
  
  if(dist(mouseX,mouseY,posX,posY)<radio){
    fill(255,0,0);
  }else{
    fill(0,0,255);
  }
  
  ellipse(posX,posY,radio*2);
  
}