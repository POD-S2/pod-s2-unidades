// Learning Processing
// Daniel Shiffman

let r, g
let b
let a
let diam
let x
let y

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(255)
}

function draw() {
  r = random(255)
  g = random(255)
  b = random(255)
  a = random(255)
  diam = random(100)
  x = random(width)
  y = random(height)

  noStroke()
  fill(r, g, b, a)
  ellipse(x, y, diam, diam)
}