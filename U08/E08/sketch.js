let avengers = [
	{ nombre: "Iron Man", vivo: false, recaudacion: 12.5, minutos: 358 },
	{ nombre: "Pepper Potts", vivo: true, recaudacion: 9.7, minutos: 70 },
	{ nombre: "Hulk", vivo: true, recaudacion: 11.2, minutos: 142 },
	{ nombre: "Black Widow", vivo: false, recaudacion: 12.2, minutos: 113 }
   ]
   
   function setup() {
	 createCanvas(400, 400);
   }
   
   function draw(){
	 
	 background(120)
	 
	 let y = 100
	 let x = 100
	 
	 for (let i = 0; i < avengers.length; i++) {
	   
	   let size = map(avengers[i].minutos, 70, 358, 12, 120)
	   textSize(size)
	   text(avengers[i].nombre, x, y)
	   y+= 30
	}
	 
   }
   
   