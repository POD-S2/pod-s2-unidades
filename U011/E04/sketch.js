
function setup() {
  createCanvas(500, 500);
  noStroke()

}


function draw() {
  background(200);


  push()
  angleMode(DEGREES)
  rectMode(CENTER)
  translate(width/2, height/2)
  rotate(45) 
  fill(255,0,0)
  rect(0,0,50)
  pop()
 

}
