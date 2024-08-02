let cancion
let amplitud
let cantElipses = 0
let distancia = 100

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
  
  
  //dibujo elipses
  
  for(let i = 0 ;  i < cantElipses ; i++ ){
      let diametro = map(nivel,0,0.5,20,200)
      fill(255,0,random(50,150))
      ellipse(100 + (distancia*i),200,diametro)
  }

  //Imprimimos por pantalla el tiempo actual de la canción
  let currentTime = round(cancion.currentTime(),2)
  text("Tiempo:" + currentTime +' seg' , 200,300 )

}


function keyTyped(){
  
  if(key === 'e'){
    if(cantElipses<3){
          cantElipses++
    }
  }else if (key ==='r'){
        if(cantElipses>0){
              cantElipses--

    }

  }
  
}
