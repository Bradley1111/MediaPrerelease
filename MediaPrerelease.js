
let m;
wipeprogress = 5
kpc = 0
winstate = 0
function preload() {

m = loadImage('M.jpg')

}

function setup() {
createCanvas(600,600);




}

function draw() {
	if (winstate === 0)  {
image(m,0,0)
fill(55,55,55)
rect(90,540,400,50) // progressbarbase
fill(50,90,50)
rect(100,550,wipeprogress / 2,30)//progressbardisplay

if (keyCode === ENTER) {wipeprogress = wipeprogress + 0.3
kpc = kpc + 10}//progressbar input



if (kpc === 50) {keyCode = 'Q'
kpc = 0}//progressbar inputstop timer


if (wipeprogress === 760) {winstate = 1}





}//if winstate end



}//program end
