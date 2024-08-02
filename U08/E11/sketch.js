let data
let deptos
let lonMin
let lonMax
let latMin
let latMax
let pobMin
let pobMax
let tasaCovidMin
let tasaCovidMax

/* Se ejecuta antes que setup.
  Hasta que no carga el archivo setup no se ejecuta
*/
function preload() {
  data = loadJSON("deptos_arg.json")
}

function setup() {
  deptos = data.deptos
  lonMin = data.lonMin
  lonMax = data.lonMax
  latMin = data.latMin
  latMax = data.latMax
  pobMin = data.pobMin
  pobMax = data.pobMax

  createCanvas(450, 800)
  noStroke()
  textAlign(CENTER)
}

function draw() {
  background(0)
  for (let i = 0; i < deptos.length; i++) {
    drawPoint(deptos[i])
  }
}



function drawPoint(depto) {
  let x = map(depto.lon, lonMin, lonMax, 10, width - 10)
  let y = map(depto.lat, latMin, latMax,  10, height - 10)
  let alfa = map(depto.pob, pobMin, pobMax, 100, 255)
  let diam = map(depto.pob, pobMin, pobMax,  10, 30)

  fill(255, 255, 0, alfa)
  ellipse(x, y, diam)
  let d = dist(x, y, mouseX, mouseY)

  if (d < diam/2) {
    fill(255)
    text(depto.name, x + 10, y)
  }
}