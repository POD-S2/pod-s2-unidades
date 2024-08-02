let cancion
let amplitud

function preload(){
  cancion = loadSound('assets/music/bbtc-aurora.mp3')
}

function setup() {
  
  cancion.play()
  amplitud = new p5.Amplitude();
  let nivel = amplitud.getLevel()
 
}

