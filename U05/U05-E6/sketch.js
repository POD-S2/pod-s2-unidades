// circulos concentricos

function setup() {
  createCanvas(500, 500)
  ellipseMode(CENTER)
}

function draw() {
  background(230)
  noFill()

  strokeWeight(1)

  for (let i = 1; i <= 10; i++) {
    ellipse(250, 250, 65 * i)
    strokeWeight(i * 2)
  }
}

