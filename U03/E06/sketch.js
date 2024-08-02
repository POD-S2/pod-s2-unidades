
function setup(){
	let x1 = 10
	let x2 = 42

	createCanvas(500,500)
	background(200)

	line(x1,0,x1,500)
	line(x2,0,x2,500)
	
	strokeWeight(10)
	line(x1 * x2 ,0,x1 * x2,500)
}

function draw(){

}