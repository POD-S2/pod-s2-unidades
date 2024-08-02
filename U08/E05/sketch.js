let ironMan = {
	nombre: "Iron Man",
	vivo: false,
	recaudacion: 12.5,
	minutos: 358
   }
   
   function setup() {
	 createCanvas(400, 400);
   
	 console.log(ironMan.minutos) // 358
	 ironMan.minutos += 25
	 console.log(ironMan.minutos) // 383
	 ironMan.vivo = true
	 if (ironMan.vivo) {
	  console.log(ironMan.nombre + " está vivo!" )
	 } // Iron Man está vivo!
	 
   }
   
   