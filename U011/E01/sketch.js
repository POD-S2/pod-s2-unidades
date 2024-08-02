
function setup() {
  createCanvas(500, 500);
}


function draw() {
  background(220)
  noStroke()
  fill(255, 0, 0)
  ellipse(50, 50, 50)

  push() // A partir de aca creamos un contexto y alli aplicamos las propiedades
  fill(0, 255, 0)
  stroke(0)
  strokeWeight(3)
  translate(80, 50)
  ellipse(50, 50, 50)
  pop() // Borramos el contexto, nuestras propiedades aplicadas se pierden!
  
  rect(200, 120, 60) // Quedo aplicado el primer fill!
}