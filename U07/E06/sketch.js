

let nombres = ['Valentina', 'Agustin', 'Ignacio', 'Camila',
'Agustina', 'Martina', 'Tomás', 'Rocio', 'Belen', 'Sofia',
'Santiago', 'Juan Cruz', 'Juan', 'Francisco', 'Joaquín', 'Nicolás', 'Candela', 'M. Belen', 'Rodrigo','Franco']

let cantidades = [3850, 2614, 2457, 2420, 2380, 2330, 2299, 1925, 1891, 1806, 1760, 1693, 1649, 1595, 1578,1547,1535,1518,1472, 1437]



function setup() {
  createCanvas(1050, 300)
  background(0)
  textSize(11)
  noStroke()
  textAlign(LEFT, TOP)

  for (let i = 0; i < nombres.length; i++) {
    let tamLetra = map(cantidades[i], 1437, 3850, 10, 100)

    //dibujamos los nombres
    
    fill(0,150,120,200)
    textSize(tamLetra)
    text(nombres[i], random(20,width-20), random(20,height-20) )

   
  }


}

