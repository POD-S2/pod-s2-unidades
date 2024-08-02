
let puntosMouseX = []
let puntosMouseY = []

function setup(){
  createCanvas(500,500)
  noStroke()
}

function draw(){
  background(255)
  puntosMouseX.push(mouseX)
  puntosMouseY.push(mouseY)

  // Dibujamos las elipses

  for(let i = 0 ; i < puntosMouseX.length ; i++ ){
    fill(255 - i * 5 )
    ellipse(puntosMouseX[i],puntosMouseY[i], i)
  }

  // si me paso de la cantidad que quiero dibujar, quitamos los valores mas viejos

  if(puntosMouseX.length > 50){
    puntosMouseX.shift()
    puntosMouseY.shift()
  }

}