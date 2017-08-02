var can = document.getElementById("can");
var cxt = can.getContext("2d");
var num = 0;
var marioImages = ['r1.png','r2.png','r3.png','l1.png','l2.png','l3.png'];
var marioImage = new Image();
marioImage.src = "images/" + marioImages[num];
var mario = new Mario(10);
var toright = document.getElementById("right");
var toleft = document.getElementById("left");
var longPress;
var pressNum = 0;
function Mario(x){
	this.x = x;
	this.speed = 3;
	this.left = function left(){
		this.x -= this.speed;
	}
	this.right = function right(){
		this.x += this.speed;
	}
	this.imageRight = function(){
		if(num >= 0 && num < 2) num++;
		else num = 0;
		marioImage.src = "images/" + marioImages[num];	
	}
	this.imageLeft = function(){
		if(num >= 3 && num < 5) num++;
		else num = 3;
		marioImage.src = "images/" + marioImages[num];
	}
}
onkeydown = function move(){
	var code = event.keyCode;
	switch(code){
		case 37:
			mario.left();
			mario.imageLeft();
			toleft.style.opacity = 0.7;
			break;
		case 39:
			mario.right();
			mario.imageRight();
			toright.style.opacity = 0.7;
			break;
	}
}
onkeyup = function release(){
	var code = event.keyCode;
	switch(code){
		case 37:
			toleft.style.opacity = 1;
			break;
		case 39:
			toright.style.opacity = 1;
			break;
	}
}
toright.onmouseover = function(){
    longPress = setInterval(function(){
		mario.right();
		mario.imageRight();
		toright.style.opacity = 0.7;
	},100);
}
toright.onmouseout = function(){
	toright.style.opacity = 1;
	clearInterval(longPress);
}
toleft.onmouseover = function(){
	longPress = setInterval(function(){
	    mario.left();
		mario.imageLeft();
		toleft.style.opacity = 0.7;
	},100);
}
toleft.onmouseout = function(){
	toleft.style.opacity = 1;
	clearInterval(longPress);
}
function drawMario(obj){
	cxt.drawImage(marioImage,obj.x,10);
}
function clear(){
	cxt.clearRect(0,0,1000,700);
	drawMario(mario);
}
window.setInterval(clear,50);