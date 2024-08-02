// Variable global
let y = 0

function setup() {
  createCanvas(500, 500)
  background(200)
}

function draw() {
  line(0, y, width, y)
  y += 0.5
}