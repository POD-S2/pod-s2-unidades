let guitarra

function preload(){
  guitarra = loadSound("sonidos/hb-guitar.mp3")
}

function setup() {
  createCanvas(400, 400);
  background(0)
  guitarra.play()
  guitarra.setVolume(0.1) // valores entre 0.0 y 1.0

}


