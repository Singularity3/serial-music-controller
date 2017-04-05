// P5 STUFF

var sensor1;
var sensor2;
var song;
var lineRot, lineLen;

function preload(){
	song = loadSound("song.mp3");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	song.play();
}

function draw() {
	background('lavender');
	fill('darkcyan');
	noStroke();
	song.setVolume(sensor1/1024.0);
	song.rate((sensor2/512.0)+.05);
	ellipse(width/3, height/2, sensor1, sensor2);
	fill('orange');
	ellipse(width*2/3, height/2, sensor1, sensor2);
}

function newData(data) {
	var values = data.split(",");
	sensor1 = float(values[0]);
	sensor2 = float(values[1]);
	console.log(data);
}

// all non-p5 javascript needs to go inside init 
// so that it executes once the page has loaded