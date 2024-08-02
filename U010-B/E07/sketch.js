let guitarra

function preload(){
  guitarra = loadSound("sonidos/hb-guitar.mp3")
}

function setup() {
  createCanvas(400, 400);
  background(0)
  guitarra.loop()
  guitarra.rate(2.0) // valores entre 0.0 y 2.0

}


