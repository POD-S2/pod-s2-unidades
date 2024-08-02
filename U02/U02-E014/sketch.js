function setup() {
    createCanvas(480,120);
    noStroke();
  
  }
  function draw() {
    background(0);
    //escala de grises + alpha
    fill(255,160);
    ellipse(132,82,200,200);
    fill(255,255);
    ellipse(202,82,200,200);
    //RGB + alpha
    fill(255,0,0,100);
    ellipse(302,82,200,200);
  }