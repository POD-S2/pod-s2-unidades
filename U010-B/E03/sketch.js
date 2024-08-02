let aplausos

function preload(){
  aplausos = loadSound("sonidos/claps.mp3")
}

function setup() {
  createCanvas(400, 400);
  background(0)

  
}

function draw() {
  
  
  if(!aplausos.isPlaying()){
       aplausos.play()

  }
  
  
}
