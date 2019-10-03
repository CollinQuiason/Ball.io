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
	canvas = createCanvas(1300, 753);
	background(0);



	socket = io.connect('localhost:80/ballio');
	socket.on('movementp1', controltickp1);
	socket.on('movementp2', controltickp2);
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
  };
	socket.emit('movement', moveData);

	p1.tick();
	p2.tick();
	ballislife.tick()

	console.log(p1.x, p2.x);
	// var isp1overball = (collideCircleCircle(p1.x, p1.y, 18, ballislife.x, ballislife.y, 10));
	// var isp2overball = (collideCircleCircle(p2.x, p2.y, 18, ballislife.x, ballislife.y, 10));


	// if (isp1overball && ballislife.dribbler != p1 && stealable){
	// 	ballislife.isDribbled = true;
	// 	ballislife.dribbler = p1;
	// 	stealable = false;
	// 	socket.emit('steal', true);
	// }
	// if (isp2overball && ballislife.dribbler != p2 && stealable){
	// 	ballislife.isDribbled = true;
	// 	ballislife.dribbler = p2;
	// 	stealable = false;
	// 	socket.emit('steal', true);
	// }
	

	fill(255, 0, 0);


	//console.log(ballislife.isDribbled);
	//console.log(ballislife.dribbler.x, ballislife.dribbler.y);
	//console.log(ballislife.x, ballislife.y);
}


function stealblockrelease(data){
	stealable = true;
}

function controltickp1(data) {
	ballislife.control(data, false);
	p1.x = data.p1.x;
	p1.y = data.p1.y;
	ballislife.x = data.ball.x;
	ballislife.y = data.ball.y;
	p1.tick();
}
function controltickp2(data) {
	ballislife.control(data, false);
	p2.x = data.p2.x;
	p2.y = data.p2.y;
	ballislife.x = data.ball.x;
	ballislife.y = data.ball.y;
	p2.tick();
}

/*
function windowResized() {
    w = window.innerWidth;
    h = window.innerHeight;
    resizeCanvas(w, h);

  }

*/
