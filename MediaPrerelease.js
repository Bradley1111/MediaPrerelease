
let m;
let mm;
let mjs;
let jps;
wipeprogress = 10
kpc = 0
winstate = 1
pat = 1000 
curt = 0
power = 1000
rest = 300
V = 1
menurd = 100
function preload() {
jps = loadSound('Jumpscare.mp3')
m = loadImage('M.jpg')
mjs = loadImage('MJS.png')
mm = loadImage('Mm.png')
}

function setup() {
createCanvas(600,600);




}

function draw() {
	pat = pat - 1
	if (pat === 250) {winstate = 1};
	if (pat < 0 && curt === 0) {winstate = 2
        }
    if (curt === 1) {power = power - 0.5}
    if (power < 0)  {winstate = 2
        }
    if (winstate === 1 && curt === 1) {rest = rest - 1}
    if (rest < 0) {pat = 1000 
    	rest = 100 
    	winstate = 0}
if (winstate === 0)  {


image(m,0,0)
fill(100,100,100)
if (curt === 1) {rect(218,75,100,200)}
fill(55,55,55)
rect(90,540,400,50) // progressbarbase
fill(50,90,50)
rect(100,550,wipeprogress / 5,30)//progressbardisplay

if (keyCode === ENTER) {wipeprogress = wipeprogress + 0.5
kpc = kpc + 10}//progressbar input



if (kpc === 50) {keyCode = 'Q'
kpc = 0}//progressbar inputstop timer


if (wipeprogress === 1900) {winstate = 4}




}//if winstate end 

if (winstate === 1)  {

image(mm,0,0)
fill(100,100,100)
if (curt === 1) {rect(218,75,100,200)}
fill(55,55,55)
rect(90,540,400,50) // progressbarbase X2
fill(50,90,50)
rect(100,550,wipeprogress / 5,30)//progressbardisplay X2

if (keyCode === ENTER) {wipeprogress = wipeprogress + 0.5
kpc = kpc + 10}//progressbar input X2



if (kpc === 50) {keyCode = 'Q'
kpc = 0}//progressbar inputstop timer X2


if (wipeprogress === 1900) {winstate = 3}





}//if winstate end x2

if (winstate === 2) {
	image(mjs,0,0)
jps.play();
jps.setVolume(1)



}
}//program end
