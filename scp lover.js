r = 0.05
btc = [255,255,255]




function preload() {
	//images/sprites
h = loadImage('slh.png')
t = loadImage('slt.png')
s1 = loadImage('049.png')
s2 = loadImage('939.png')
s3 = loadImage('173.png')
s4 = loadImage('914.png')
}


function setup() {
createCanvas(940, 810);
}

function draw() {
background(180,140,140)

//main menu
image(h,100,100,50,50)


image(h,750,100,50,50)


image(t,200,100)

// button
fill(btc)
rect(380,500,100,50)
fill(0)
//Text font
textSize(14)
//Title
text('find your',405,525)
text('SCP',415,540)
//button click search
mousePressed = function() {if (mouseX >= 380 && mouseX <= 480 && mouseY >= 500 && mouseY <= 550) {r = random(8)}}

if (mouseX >= 380 && mouseX <= 480 && mouseY >= 500 && mouseY <= 550) {btc = [150,150,150]}
  else {btc = [255,255,255]}


  	if (r >= 0 && r <= 1 ) {image(s1,335,200)
fill(120,120,120)
textSize(25)
text("049 will try his best to cure of your loneliness",200,650)

  	}// 049 end

    if (r >= 1 && r <= 2) {image(s2,300,300)
    fill(250,50,50)
    textSize(25)
text("ooohh 939 will please you with as much butt biting as you want",160,650)

    }//939 end

    if (r >= 2 && r <= 3) {image(s3,310,250,250,250)
textSize(25)
text("173 will snap your Virginity when he gets the chance",250,650)
    }//173 end



    if (r >= 3 && r <= 4) {image(s4,245,240,400,250)
textSize(25)
fill(100,200,100)
text('914 is grinding its gears for you',250,650)
    }// 914 end
}