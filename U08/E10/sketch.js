

let datos
let avengers
let posXAleatoria = []
function preload() {
	datos = loadJSON("avengers.json")
}

function setup() {
	textAlign(CENTER, CENTER)
	noStroke()
	createCanvas(windowWidth, windowHeight);
	avengers = datos.avengers
	for(let i = 0 ; i < avengers.length ; i++){
		posXAleatoria.push(random(20,width-20))
	}
}

function draw() {

	background(120)

	let y = 100

	for (let i = 0; i < avengers.length; i++) {

		let tam = map(avengers[i].minutos, 70, 358, 50, 200)
		let posy = map(avengers[i].recaudacion, datos.minRecaudacion, datos.maxRecaudacion, 10, height - 50)
		let posx = map(avengers[i].recaudacion, datos.minRecaudacion, datos.maxRecaudacion, 10, width - 50)

		if(avengers[i].vivo){
			fill(255,0,0,50)
		}else{
			fill(0,255,0,50)
		}
		ellipse(posx, posy, tam)
		fill(0)
		text(avengers[i].nombre,posx + 30, posy - 20)
		y += 30
	}

}

