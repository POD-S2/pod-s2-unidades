let nombres = ['Valentina', 'Agustin', 'Ignacio', 'Camila',
'Agustina', 'Martina', 'Tomás', 'Rocio', 'Belen', 'Sofia',
'Santiago', 'Juan Cruz', 'Juan', 'Francisco', 'Joaquín', 'Nicolás', 'Candela', 'M. Belen', 'Rodrigo','Franco']

let cantidades = [3850, 2614, 2457, 2420, 2380, 2330, 2299, 1925, 1891, 1806, 1760, 1693, 1649, 1595, 1578,1547,1535,1518,1472, 1437]



function setup() {
  createCanvas(1050, 300)
  background(0)
  textSize(11)
  noStroke()
  textAlign(CENTER, CENTER)

  for (let i = 0; i < nombres.length; i++) {
    let transparencia = map(cantidades[i], 1437, 3850, 10, 100)

    //dibujamos los nombres
    fill(255)
    text(nombres[i], x, height / 2 + 50 )

    //dibujamos las elipses

    fill(255, 0, 255,transparencia)
    ellipse(x, height / 2, 40)

    //dibujamos las cantidades

    text(cantidades[i], x, 120 )
   
  }


}