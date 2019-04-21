class Player{
	constructor(thex = width/2, they = height/2, pone = true){
		this.x = thex;
		this.y = they;
		this.isp1 = pone;
		this.tick();
	}
	tick(){
		stroke(0);
		if (this.isp1){
			fill(0, 0, 255);
		}
		else{
			fill(255, 0, 0);
		}
		circle(this.x, this.y, 19);
	}
}