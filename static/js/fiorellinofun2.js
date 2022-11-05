let x 
let y 
let d 


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

function cella(x,y,d){
  
  let x3
  let y3 
  let d1 
}


function setup() {
  createCanvas(400,400)
  
  x = random(400)
  y = random(400)
  d = 40
  
}

function draw() {
   
   background(0,255,0)
   fiorellino(x,y,d)

}