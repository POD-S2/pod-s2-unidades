
let miImagen
function preload() {
 hongo = loadImage("images/hongo_400x400.png")
  
}

function setup() {
  createCanvas(1200, 800);
  textAlign(CENTER,CENTER)
  textSize(30)
}


function draw() {
  background(255);


  //Imagen en tamaño original
  image(hongo,0,0)
  //console.log(hongo.width)
  text("Tamaño original",hongo.width / 2 ,hongo.height + 50)
 
    //Imagen deformada
  
  image(hongo,0,600, 500,100)
  text("Tamaño deformado",250 ,750)

  
  //Imagen escalada
  push()
  scale(1.5,1.5)

  image(hongo,300,0)
  pop()
  text("Tamaño escalado",750 ,650)
  

  
  //Referencia : https://p5js.org/es/reference/#/p5/scale
  

}