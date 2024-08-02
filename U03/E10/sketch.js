// Variable global
let y = 0

function setup() {
  createCanvas(500, 500)
}

function draw() {
  background(200)
  line(0, y, width, y)
  y += 0.5
}