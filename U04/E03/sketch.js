function setup() {
	createCanvas(500, 500)
	noStroke()
  }
  
  function draw() {
	background(220)
	fill(0, 255, 0)
	// ¿El mouse está en la mitad izquierda del canvas?
	if (mouseX < width/2) {
		// Si la condición es verdadera dibuja en la mitad izquierda
		rect(0, 0, width/2, height)
	  } else {
		// Si la condición es false dibuja en la mitad derecha
		rect(width/2, 0, width/2, height)
	}
  }