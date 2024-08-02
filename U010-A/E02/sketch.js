
let miImagen

function preload() {
 miImagen= loadImage("static/pedro-m.png")
  
}

function setup() {
  createCanvas(500, 500);
  console.log("Ancho: " + miImagen.width)
  console.log( "Alto: " + miImagen.height)

}


function draw() {
  background(220)
  image(miImagen, 0,0 , 250,250)

  let colorEnPixelDentro = miImagen.get(200,200)
  console.log(colorEnPixelDentro)
  
  let colorEnPixelFuera = miImagen.get(600,600)
  console.log(colorEnPixelFuera)
  
  noLoop()

  
}