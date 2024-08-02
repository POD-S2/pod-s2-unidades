let x = 0;

function setup() {
  createCanvas(400, 400);
  background(220);

}

function draw() {
 
  
  line(x , 20, x , width - 20);
  x += 10;


}