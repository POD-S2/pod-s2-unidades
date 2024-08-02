// Linea diagonal hecha de elipses 
function setup() {
  createCanvas(500, 500)
}

function draw() {
  background(200)
  noFill()

  strokeWeight(1)
  stroke(0)
  for (let i = 25; i < 500; i += 50) {
    ellipse(i, 500 - i, 30)
    if (i > 200) {
      stroke(255)
      strokeWeight(10)
    }
  }
}

