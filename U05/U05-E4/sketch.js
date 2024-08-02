

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  for (let x = 0 ; x <= width ; x+= 10){
    line(x , 20, x , width - 20);
    
  }


}