var w, h;
var bkgd;
var p1, p2;
var ballislife;
var socket;
var stealable = true; //frames
var count = 0;

function preload(){
	bkgd = loadImage("Resources/court.jpg");
}

function setup(){
	//h = window.innerHeight;
 	//w = window.innerWidth;
	canvas = createCanvas(1920, 1080);
	background(0);



	socket = io.connect('CollinRottingha.us:80');
	socket.on('movement', controltick);
	socket.on('enemymovement', enemycontroltick);
	socket.on('stealblockrelease', stealblockrelease);


	p1 = new Player(width/5, height/2);
	p2 = new Player(width*(4/5), height/2, false);
	ballislife = new Ball();




}

function draw(){
	//StealTimer
	background(bkgd);
	var moveData = {
		s: keyIsDown(16),
		u: keyIsDown(87),
		l: keyIsDown(65),
		r: keyIsDown(68),
		d: keyIsDown(83)
	}
	socket.emit('movement', moveData);

	p1.tick();
	p2.tick();

	var isp1overball = (collideCircleCircle(p1.x, p1.y, 18, ballislife.x, ballislife.y, 10));
	var isp2overball = (collideCircleCircle(p2.x, p2.y, 18, ballislife.x, ballislife.y, 10));


	if (isp1overball && ballislife.dribbler != p1 && stealable){ 
		ballislife.isDribbled = true;
		ballislife.dribbler = p1;
		stealable = false;
		socket.emit('steal', true);
	}
	if (isp2overball && ballislife.dribbler != p2 && stealable){
		ballislife.isDribbled = true;
		ballislife.dribbler = p2;
		stealable = false;
		socket.emit('steal', true);
	}
	ballislife.tick()

	fill(255, 0, 0);
	


	//console.log(ballislife.isDribbled);
	//console.log(ballislife.dribbler.x, ballislife.dribbler.y);
	//console.log(ballislife.x, ballislife.y);
	
	
}


function stealblockrelease(data){
	stealable = true;
}

function controltick(data) {
	ballislife.control(data, true);
	if (data.s){//SLOW
		if (data.u) { //UP
	    p1.y -= 1;
	  } if (data.l) { //LEFT
	    p1.x -= 1;
	  } if (data.r) { //RIGHT
	    p1.x += 1;
	  } if (data.d) { //DOWN
	    p1.y += 1;
	  }
	}

	else{
	  if (data.u) { //UP
	    p1.y -= 5;
	  } if (data.l) { //LEFT
	    p1.x -= 5;
	  } if (data.r) { //RIGHT
	    p1.x += 5;
	  } if (data.d) { //DOWN
	    p1.y += 5;
	  }
  }
}
function enemycontroltick(data) {
	ballislife.control(data, false);
	if (data.s){//SLOW
		if (data.u) { //UP
	    p2.y -= 1;
	  } if (data.l) { //LEFT
	    p2.x += 1;
	  } if (data.r) { //RIGHT
	    p2.x -= 1;
	  } if (data.d) { //DOWN
	    p2.y += 1;
	  }
	}

	else{
	  if (data.u) { //UP
	    p2.y -= 5;
	  } if (data.l) { //LEFT
	    p2.x += 5;
	  } if (data.r) { //RIGHT
	    p2.x -= 5;
	  } if (data.d) { //DOWN
	    p2.y += 5;
	  }
  }
}

/*
function windowResized() {
    w = window.innerWidth;
    h = window.innerHeight;
    resizeCanvas(w, h);

  }

*/