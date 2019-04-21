class Player{
	constructor(thex = width/2, they = height/2){
		this.x = thex;
		this.y = they;
		this.tick();
	}
	tick(){
		stroke(0);
		fill(0, 0, 255);
		circle(this.x, this.y, 19);
	}
}