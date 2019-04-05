//create an empty array called balls
let balls = [];

//create a variable to hold your avatar
let me;

function preload() {
  soundFormats('mp3', 'ogg','wav');
  mySound = loadSound('soundcode.wav');
}

function setup() {
  createCanvas(500, 400);

  //make one avatar called me
  me = new Avatar(width/10, 200, 20);

}

function draw(){
	background(110);

  me.drawMe();
  me.moveMe();

  if (frameCount % 40 == 0) {
      let  b = new Ball(width, random(1,height), -4);
      balls.push(b);
      console.log(balls); //print the balls array to the console
    }

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	 	      balls[i].drawBall();
       	  balls[i].moveBall();
        	balls[i].bounceBall();
	  }

}

//avatar class
class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}

	drawMe(){  // draw the running person
    		stroke("pink");
        strokeWeight(6);
    		fill("purple");
		    rect(this.x,this.y,20,20);
        line(this.x,this.y, this.x, this.y+40);
        line(this.x, this.y+40, this.x-20, this.y+60);
        line(this.x, this.y+40, this.x+10, this.y+50);
        line(this.x+10, this.y+50, this.x+5, this.y+80);
        line(this.x, this.y+15, this.x-10, this.y+25);
        line(this.x-10, this.y+25, this.x+10, this.y+35);
	}

	moveMe(){
    if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
       this.y -= this.speed;
    }

    if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
        this.y += this.speed;
    }
    if (keyIsDown(RIGHT_ARROW)) { // if you hold the down arrow, move down by speed
        this.x += this.speed;
    }
        if (keyIsDown(LEFT_ARROW)) { // if you hold the down arrow, move down by speed
            this.x -= this.speed;
	}

}

}


//ball class from which to create new balls with similar properties.
class Ball {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed){
		this.x = x;
    this.y = y;
    this.speed = speed;
	}

	// draw a ball on the screen at x,y
	drawBall(){
    	stroke(5);
      strokeWeight(10);
    	fill(210,30,10);
		  ellipse(this.x,this.y,25,25);
      fill(240,80,212);
       ellipse(this.x,this.y,45,40);
	}



	//update the location of the ball, so it moves across the screen
	moveBall(){
		this.x = this.x+ this.speed;
		this.y = this.y+.25;
	}

	//if the ball hits the person, change the speed value to negative (send it in the opposite direction)
  	bounceBall(){
    		if (this.x >= me.x-100 && this.x <= me.x+100 && this.y > me.y-50 && this.y < me.y+50){
      			this.speed = -this.speed;
            mySound.setVolume(0.1);
            mySound.play();
    		}
  	}

}
