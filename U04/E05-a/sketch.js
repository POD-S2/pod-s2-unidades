let y = 150
let x = 250
let distancia
let radio = 50

function setup() {
  createCanvas(500, 300)
  noStroke()
}

function draw() {
  background(0, 255, 255)
  fill(255, 160, 0)

  // Imprimimos el circulo en las variables x e y
  ellipse(250, y, radio * 2)


  // con dist() calculamos la distancia entre
  
  // el centro del circulo y la posición del mouse
  distancia = dist(x, y, mouseX, mouseY)
  console.log("Distancia: " + int(distancia) + "px")

  if(distancia <= radio ){
    fill(0)
    text("Dentro de la elipse!",200,150)
    
  }

}

