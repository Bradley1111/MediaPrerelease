function setup() {
  createCanvas(400, 400);
x = 10

y = 1
	s = 0
score = 0
	state = 0
	Time = 0
	tinad = 0.01
	winstate = 0
}
function draw() {
  fill(255,255,255)
	rect(x,y,50,50)
	background(0,100,0);
			
	fill(255,224,189)
	ellipse(x +27,y -20,40,40)//head
	fill(0,105,255)
	rect(x +30,y +35,15,40)//left leg
	rect(x +10,y +35,15,40)//right leg
	fill(255,0,0)
	rect(x +10,y,35,40)//Torso
	rect(x +45,y + 10,40,10)//arm
	fill(255,224,189)
	
	fill(255,255,255)
	fill(100,200,100)
	rect(x + 60,y + 15,200,5)	
	fill(255,255,255)
	rect(340,200,55,55)
	//gun
	fill(100,100,100)
	rect(70,y +10,60,10)
	rect(100,y ,10,10)
	fill(0,100,100)
	rect(100,y,5,10)		
	
	if (y === 324) {s = 1}
	if (y === 40) {s = 0}
	if (s === 0) { y = y + 1}
	if (s === 1)  { y = y - 1}
		
if (y >= 200 && y <= 255) {}
fill(0,0,0)
	text(Time,50,10)	
	text(score,10,10)
	 if (state < 0) {background(255,0,0); text('YOU LOSE',170,200)}
	mouseClicked = function() {if (y >= 170 && y <= 250) {score = score + 1}
														else (state = -1)}
	if (score === 25) {winstate = 1}
	
	if (winstate === 1) {background(25,50,100); text('YOU WIN',170,200)
							text("time:",100,100)	
							text(Time,150,100)
											 tinad = 0}
	
	Time = Time + tinad
	

					
											 
														
}												
