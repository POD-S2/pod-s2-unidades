
let pedro
let grados = 0
function preload() {
	pedro= loadImage("static/pedro-m.png")
  
}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}


function draw() {
  background(0);
  
  //trasladamos el origen del canvas al centro
  // y rotamos la imagen

  imageMode(CENTER)

  strokeWeight(3)
  line(0,0,0,200)
  line(0,0,200,0)
  
  push()
  translate(width / 2, height / 2);
  rotate(grados)
  image(pedro, 0,0, 100,100)
  pop()

  


  grados++
  
  //Ref: https://p5js.org/es/reference/#/p5/rotate

}