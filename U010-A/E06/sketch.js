
let disenio
function preload() {
 disenio = loadImage("static/tp03.png")
  
}

function setup() {
  createCanvas(disenio.width, disenio.height);
  imageMode(CENTER)
  textSize(30)
}


function draw() {
  background(255);


  //Imagen en tamaño original
  image(disenio,width/2,height/2)
  
  filter(BLUR,5)
  
  //Imagen en tamaño + pequeño
  image(disenio,width/2,height/2 , 300,300)
 
 
  
}