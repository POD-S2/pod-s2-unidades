let cancion
let amplitud

function preload(){
  cancion = loadSound('assets/music/bbtc-aurora.mp3')
}

function setup() {
  
  createCanvas(400, 400);
  textAlign(CENTER,CENTER)
  textSize(20)
  
  //Seteos sobre la canción
  cancion.setVolume(0.5)
  cancion.play()
  amplitud = new p5.Amplitude();
}

function draw() {
  background(220);
 
  let nivel = amplitud.getLevel()
  text("Amplitud:" + round(nivel,2) , 200,100 )
  
  
  let diametro = map(nivel,0,0.5,20,200)
  //let colorRojo = map(nivel,0,0.5,100, 255)
  //let colorAzul = map(nivel,0,0.5,50, 100)

  //fill(colorRojo,0,colorAzul)
  fill(255,0,120)
  ellipse(200,200,diametro)
  
  //Imprimimos por pantalla el tiempo actual de la canción
  let currentTime = round(cancion.currentTime(),2)
  text("Tiempo:" + currentTime +' seg' , 200,300 )

}

