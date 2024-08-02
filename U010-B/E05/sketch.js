let guitarra

function preload(){
  guitarra = loadSound("sonidos/hb-guitar.mp3")
}

function setup() {
  createCanvas(400, 400);
  background(0)

  
}

function mouseClicked(){
 
   
  if(!guitarra.isPlaying()){

    guitarra.play()

  }else{
    guitarra.pause()

  }
}


