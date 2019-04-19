var w, h;
var bkgd;
var p1, p2;
var ballislife;

function preload(){
	bkgd = loadImage("Resources/court.jpg");
}

function setup(){
	h = window.innerHeight;
 	w = window.innerWidth;
	canvas = createCanvas(w, h);
	background(0);
	p1 = new Player(width/5, height/2);

	ballislife = new Ball();
}

function draw(){
	background(bkgd);


	controltick();

	p1.tick();

	ballislife.isDribbled = (collideCircleCircle(p1.x, p1.y, 18, ballislife.x, ballislife.y, 10) || ballislife.isDribbled)
	ballislife.dribbler = p1;
		


	ballislife.tick();

	fill(255, 0, 0);
	p2 = circle(width*(4/5), height/2, 18);


	console.log(ballislife.isDribbled);
	console.log(ballislife.dribbler.x, ballislife.dribbler.y);
	console.log(ballislife.x, ballislife.y);
}




function controltick() {
	if (keyIsDown(16)){//SLOW
	if (keyIsDown(87)) { //UP
    p1.y -= 1;
  } if (keyIsDown(65)) { //LEFT
    p1.x -= 1;
  } if (keyIsDown(68)) { //RIGHT
    p1.x += 1;
  } if (keyIsDown(83)) { //DOWN
    p1.y += 1;
  }
	}

	else{
  if (keyIsDown(87)) { //UP
    p1.y -= 5;
  } if (keyIsDown(65)) { //LEFT
    p1.x -= 5;
  } if (keyIsDown(68)) { //RIGHT
    p1.x += 5;
  } if (keyIsDown(83)) { //DOWN
    p1.y += 5;
  }
  }
}


function windowResized() {
    w = window.innerWidth;
    h = window.innerHeight;
    resizeCanvas(w, h);

  }

