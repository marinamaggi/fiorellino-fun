let w = 600;
let h = 300;

function setup() {
  createCanvas(w, h)
  background('white')
  
}

function draw() {
  let d = random(30, 90)
  let x = random(d / 2, w)
  let y = random(d / 2, h)

  let r = random(0, 256)
  let g = random(0, 256)
  let b = random(0, 256)
  let alpha = random(0, 256)

  fill(r, g, b, alpha)
  noStroke()
  circle(x, y, d)


}

