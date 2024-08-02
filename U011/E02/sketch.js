
function setup() {
  createCanvas(500, 500);
}


function draw() {
  background(220)
  fill(0,100)
  rect(100,100,50)

  push()
  fill(255,0,0,100)
  scale(2.5)
  rect(100,100,50)
  pop()

  push()
  fill(0,255,0,100)
  scale(0.5)
  rect(100,100,50)
  pop()

}