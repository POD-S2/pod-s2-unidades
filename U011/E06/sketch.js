
function setup() {
  createCanvas(500, 500);
  noStroke()
  angleMode(DEGREES)

}


function draw() {
  background(200);
  fill(0, 100)
  rect(25,25,50)

  push()
  fill(120, 120)
  shearX(45) //Mouse
  rect(25,25,50)
  pop()
 
  push()
  shearY(mouseX)
  rect(25,25,50)
  pop()

}
