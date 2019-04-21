class Ball{
	constructor(){
		this.x = width/2;
		this.y = height/2;
		this.isDribbled = false;
		this.isShot = false;
		this.dribbler = new Player();
		this.dribble();
		this.tick();
	}
	tick(){
		fill(250,131,32);
		if (this.isDribbled){
			this.dribble();
			this.moveDribble();
		}

		circle(this.x, this.y, 10);
	}
	dribble(){
		this.x = this.dribbler.x;
		this.y = this.dribbler.y;
		
	}
	moveDribble(){
		if (keyIsDown(87)) { //UP
    		this.y -= 15;
  		} if (keyIsDown(65)) { //LEFT
   			this.x -= 15;
  		} if (keyIsDown(68)) { //RIGHT
    		this.x += 15;
  		} if (keyIsDown(83)) { //DOWN
    		this.y += 15;
  		}
	}
}