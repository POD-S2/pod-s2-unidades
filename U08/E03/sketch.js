let ironMan = {
	nombre: "Iron Man",
	vivo: false,
	recaudacion: 12.5,
	minutos: 358
   }
   
   function setup() {
	 createCanvas(400, 400);
	 textSize(30)
	 textAlign(CENTER,CENTER)
   }
   
   function draw(){
	 
	 background(120)
	 text(ironMan.nombre , width /2, height/2)
	 let posX = 100;
	 
	 for(let i = 0 ; i < ironMan.recaudacion ; i++){
	   ellipse(posX , height/2 + 100, 20)
	   posX+=20
	 }
   
	 
   }
   
   
   