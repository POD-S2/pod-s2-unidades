let y = 125
let x = 0
let velocidad = 5
let distancia
let radio = 25

function setup() {
  createCanvas(500, 250)
  noStroke()
}

function draw() {
  background(0, 255, 255)
  fill(255, 160, 0)

  // Imprimimos el circulo en las variables x e y
  ellipse(x, y, radio * 2)

  // Si la posición es mayor al límite derecho o (||)
  // si la posición es menor al límite izquierdo
  if (x > width || x < 0) {
    // si alguna de las dos expresiones es verdadera
    // cambiamos el sentido cambiando el signo a velocidad
    velocidad = velocidad * -1
  }

  // con dist() calculamos la distancia entre
  // el centro del circulo y la posición del mouse
  distancia = dist(x, y, mouseX, mouseY)

  x = x + velocidad

  // solo para debuggear
  console.log("Distancia: " + int(distancia) + "px")
}

// Si el mouse está apretado
function mousePressed() {
  // Si la distancia entre el mouse y el centro del circulo 
  // es menor a la variable radio para el ciclo de draw()
  if (distancia <= radio) {
    noLoop()
  }
}

// Cuando el mouse se suelta, draw retoma el ciclo de repetición
function mouseReleased() {
  loop()
}