// only happens once

let globalVar 

function setup() {
	createCanvas(windowWidth, windowHeight);
	background("white");
	globalVar = random(255) // 0 -1 
	// globalVar
	//frameRate(2)
	noStroke()
}
// 60 frames per second
// this draw is kind of like a loop
function draw() {

	//globalVar
	// first in x, second y, widthof ellipse height 
	//background(random(255))
	
	//ellipse(mouseX, mouseY, 20, 20);
	let widthsq = 20
	let heightsq = 20
	let blueshade
	for (let i = 0; i < width;i=i+ widthsq) {
		for(let j = 0 ; j < height; j= j + heightsq) {
			// if _____ :
			if (mouseX < width/2) {
				blueshade = 200	
			} else {
				blueshade=50	
			}
		let noiseValue = noise(i*.01,j*.01)
		fill(noiseValue*255,0,blueshade)
		rect(i,j,widthsq,heightsq)
		}
	}
	
}
