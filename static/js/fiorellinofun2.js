let x 
let y 
let d

let flowerForRow = 10
let w = 400
let cella = w/flowerForRow // 80


function fiorellino(x,y,d){
  let x1 = x-d/2
  let x2 = x+d/2
  let y1 = y-d/2
  let y2 = y+d/2
  

  fill('orange')
  circle(x1,y1,d)
  circle(x1,y2,d)
  circle(x2,y1,d)
  circle(x2,y2,d)
  fill(255,0,0)
  circle(x,y,d)
}


function setup() {
  createCanvas(w,w)
  background(0,255,0)

  x = cella/2
  y = cella/2
  d = cella/2

  

 

  // frameRate(2)
}

function draw() {
   
  fiorellino(x,y,d)
  x = x + cella
   if(x>w){
    y = y + cella
    x = cella/2
  }
}