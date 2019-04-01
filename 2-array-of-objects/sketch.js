
//create an empty array called balls

let balls = [];

function setup() {
  createCanvas(800, 400);

}

function draw(){
	background(220);

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	    balls[i].drawBall();
      balls[i].moveBall();
	  }
}

function keyPressed(){ //every time you push a key, make a new ball from the ball class and add it to the balls array
  let  b = new Ball(0, 100);
  balls.push(b);
  console.log(balls);
}

//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
	}

	drawBall(){  // draw a ball on the screen at x,y
    let e = random (50);
    let x = random (100);
let m = random (200);
    		stroke(10);
    		fill("blue");
		    rect(this.x,this.y,e,x,m);
	}

	moveBall(){ //update the location of the ball, so it moves across the screen
let g = random (10);
let h = random (2);
    this.x = this.x+g-h;
		this.y = this.y+h;
	}

}
