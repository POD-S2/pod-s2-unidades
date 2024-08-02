let x = 30;
function setup(){
	createCanvas(480,120);

}

function draw(){
	background(220);
	fill(255,255,0);
	ellipse(x,60,60,60);
	x = x + 1;
}