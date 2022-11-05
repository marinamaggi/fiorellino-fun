let x 
let y 
let d 
let vx
let vy 

function fiorellino(x,y,d){
  let x1 = x-d/2
  let x2 = x+d/2
  let y1 = y-d/2
  let y2 = y+d/2
  
  noStroke()
  fill('yellow')
  circle(x1,y1,d)
  circle(x1,y2,d)
  circle(x2,y1,d)
  circle(x2,y2,d)
  fill(255,0,0)
  circle(x,y,d)
}

function setup() {
  createCanvas(600,300)
  
  x = random(300)
  y = random(300)
  d = random(25,60)
  
  vx = 1
  vy = 1
}

function draw() {
   
   background(0,0,255)
   fiorellino(x,y,d)
   
   x=x+vx
   y=y+vy

   if(x<0){
        vx = -1*vx
          }

   if(x>600){
        vx = -1*vx
            }
   if(y<0){
       vy = -1*vy
          }

   if(y>300){
       vy = -1*vy
          }
    

   

}