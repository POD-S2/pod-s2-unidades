
diametros = [142984, 108728, 51118,  49532,  12756,  12104,  6794 , 4880 ] // En KM 
planetas= ["Júpiter","Saturno","Urano" , "Neptuno","Tierra", "Venus", "Marte", "Mercurio"]

function setup() {
  createCanvas(500, 500);
  noStroke()
}


function draw() {
  background(200);

  for (let i = 0 ; i < planetas.length ; i++){
    //Mediante uso de map vamos a mapear el tamanio de la escala
    let escala = map(diametros[i],4880,142984, 0.5 , 2.0 )
    escala = (round(escala,2))
    let posRandomX = random(100,250)
    let posRandomY = random(100,250)
    push() // Importante el uso de push() y pop() para no acumular la escala
    
    scale(escala) //Aplicamos el scale, que es desde 0.5 a 2.0


    fill(random(255),100,0,100) 
    ellipse(posRandomX, posRandomY, 50) // Dibujamos la elipse
 
    fill(0, 100)
    text(planetas[i], posRandomX , posRandomY)   //Dibujamos el nombre del planeta

    pop()

  }

  noLoop()
  


}
