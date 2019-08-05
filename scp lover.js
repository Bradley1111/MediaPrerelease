r = 2.05
btc = [255,255,255]




function preload() {
h = loadImage('slh.png')
t = loadImage('slt.png')
s1 = loadImage('049.png')
s2 = loadImage('939.png')
s3 = loadImage('173.png')
}


function setup() {
createCanvas(940, 810);
}

function draw() {
background(180,140,140)
image(h,100,100,50,50)
image(h,750,100,50,50)
image(t,200,100)
fill(btc)
rect(380,500,100,50)
fill(0)
text('find your',405,525)
text('SCP',415,540)

mousePressed = function() {if (mouseX >= 380 && mouseX <= 480 && mouseY >= 500 && mouseY <= 550) {r = random(8)}}

if (mouseX >= 380 && mouseX <= 480 && mouseY >= 500 && mouseY <= 550) {btc = [150,150,150]}
  else {btc = [255,255,255]}


  	if (r >= 0 && r <= 1 ) {image(s1,335,200)}
    if (r >= 1 && r <= 2) {image(s2,300,300)}
    if (r >= 2 && r <= 3) {image(s3,310,250,250,250)}
}