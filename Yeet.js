ls = [255,255,255]
b1x = 200
b1y = 200
mc = 1
mt = 0
muc = 10
px = 100
py = 100
libx = 500
liby = 500
bc = 'No'
inv1 = 2
inv2 = 1
inv3 = 1

function setup() {
  createCanvas(940, 810);
            
}

function draw() {
  
  if (mc === 1) {
  
  background(100,160,190);
  fill(ls)
  rect(100,500,100,50)
  fill(0)
    text('Start',135,530)
    fill(255,255,255)
    rect(700,200,200,500)
    fill(0)
    text('Controls',780,220)
    text('Move Up: Up Arrow',750,250)
    text('Move Down: Down Arrow',750,300)
    text('Move Left: Left Arrow',750,350)
    text('Move Right: Right Arrow',750,400)}
  
  if (mouseX >= 100 && mouseX <= 200 &&
        mouseY >= 500 && mouseY <= 550) {ls = [180,180,180]}
  else { ls = [255,255,255]}
    
 mousePressed = function() { if (mouseX >= 100 && mouseX <= 200 &&
        mouseY >= 500 && mouseY <= 550) {mc = 2}}
                            
                      
  
if (mc === 2) {
    background(11,102,35)
    
    if (keyCode === UP_ARROW) {py = py -1}
         if (keyCode === DOWN_ARROW) {py = py +1}
         if (keyCode === LEFT_ARROW) {px = px -1}
         if (keyCode === RIGHT_ARROW) {px = px +1}
                 
            mt = mt + muc     
        if (mt === 200) {keyCode = 'q'
                       mt = 0}  
    fill(255,255,255)
    rect(px,py,20,20)
    
    
    fill(150,150,150)
    rect(400,0,530,809)
   
    
    fill(95,95,95)
    rect(290,50,100,50)
    
    fill(10,10,10)
    text('Public Library',305,80)
    fill(165,42,42)
    rect(395,102,5,25)

if (px +20 >= 395 && px +20 <= 415 && py >= 102 && py <= 122) {mc = 3}
if (px +20 > 400) { px = px -10}

}
  
    
    
    
    

     
  
  
  
  
  
  if (mc === 3) {background(139,69,19)
             
      

                 
                 
                 fill(255,255,255)
         fill(255,255,255)
         rect(0,0,130,50) //inv base   
         rect(10,6,35,35)//inv spot 1
         rect(50,6,35,35)//inv spot 2
         rect(90,6,35,35)//inv spot 3
                fill(0)
                 if (inv1 === 1) {text('None',14,30)}
  else {    if (inv1 === 2) {text("Phone",10.5,30)}
  else {
       if (inv1 === 3) {text("Phone",10.5,25)
                       text("Plug",15,35)}}}
                 
                 if (inv2 === 1) {text('None',54,30)}
  else {    if (inv2 === 2) {text("Phone",50.5,30)}
  else {
       if (inv2 === 3) {text("Phone",50.5,25)
                       text("Plug",55,35)}}}
                 
                 if (inv3=== 1) {text('None',94,30)}
  else {    if (inv3=== 2) {text("Phone",90.5,30)}
  else {
       if (inv3 == 3) {text("Phone",90.5,25)
                       text("Plug",95,35)}}}
                 fill(0)
                 fill(255,255,255)
                 rect(px,py,20,20) 
            fill(255,0,0)
            rect(libx,liby,20,20)
                 
         if (keyCode === UP_ARROW) {py = py -1}
         if (keyCode === DOWN_ARROW) {py = py +1}
         if (keyCode === LEFT_ARROW) {px = px -1}
         if (keyCode === RIGHT_ARROW) {px = px +1}
                 
           fill(210,105,30)
                 
                 
                 rect(230,10,50,20)  
                 
                 
                 
                 rect(915,200,20,50)  
                 
                 
                 
                 rect(370,780,50,20)  
                 
                 
                 
                 
                 
                 mt = mt + muc     
        if (mt === 200) {keyCode = 'q'
                                                                                                                            mt = 0}}
}    
