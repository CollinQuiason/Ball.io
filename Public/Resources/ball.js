class Ball{
	constructor(){
		this.dribbler = new Player(width/2, height/2, false);
		this.isDribbled = false;
		this.isShot = false;
		this.dribble();
		circle(this.x, this.y, 10);
	}
	tick(){
		fill(250,131,32);
		circle(this.x, this.y, 10);
	}
	control(data, isme){
		this.dribble();
		if (this.isDribbled){
			this.moveDribble(data, isme);
		}
	}
	dribble(){
		this.x = this.dribbler.x;
		this.y = this.dribbler.y;
		
	}
	moveDribble(data, isme){
		if (this.dribbler.isp1 && isme){		
			if (data.u) { //UP
	    		this.y -= 15;
	  		} if (data.l) { //LEFT
	   			this.x -= 15;
	  		} if (data.r) { //RIGHT
	    		this.x += 15;
	  		} if (data.d) { //DOWN
	    		this.y += 15;
	  		}
		}
		if ((!this.dribbler.isp1) && (!isme)){		
			if (data.u) { //UP
	    		this.y -= 15;
	  		} if (data.l) { //LEFT
	   			this.x += 15;
	  		} if (data.r) { //RIGHT
	    		this.x -= 15;
	  		} if (data.d) { //DOWN
	    		this.y += 15;
	  		}
		}
	}
}