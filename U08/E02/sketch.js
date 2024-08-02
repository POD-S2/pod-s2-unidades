let ironMan = {
	nombre: "Iron Man",
	vivo: false,
	recaudacion: 12.5,
	minutos: 358
   }
   
   function setup() {
	 createCanvas(400, 400);
	 textSize(30)
	 background(120)
	 text(ironMan.nombre , width /2, height/2)
	 text(ironMan.vivo , width /2, height/2 + 30)
   }
   
   
   
   