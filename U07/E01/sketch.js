let x0 = 150
let x1 = 361
let x2 = 283
let x3 = 69
let x4 = 471
let x5 = 350
let x6 = 229
let x7 = 131
let x8 = 117
let x9 = 319



function setup() {
  createCanvas(500, 500);

}


function draw() {
  background(200);
  
 fill(0)
 rect(0, 0, x0, 45)
 rect(0, 50, x1, 45)
 rect(0, 100, x2, 45)
 rect(0, 150, x3, 45)
 rect(0, 200, x4,45)
 rect(0, 250, x5, 45)
 rect(0, 300, x6, 45)
 rect(0, 350, x7, 45)
 rect(0, 400, x8, 45)
 rect(0, 450, x9, 45) 

}

function mousePressed(){
  saveCanvas()
}