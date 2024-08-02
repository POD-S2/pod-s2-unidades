 

let x = [ 150 , 361 , 283, 69, 471,350, 229, 131,117,319 ]


function setup() {
  createCanvas(500, 500);

}


function draw() {
  background(200);
  

  fill(0)
  for (let i = 0 ; i < x.length ; i++){
     rect(0, 50 * i, x[i], 45)
  }
}