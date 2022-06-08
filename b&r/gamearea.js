 function prekazka() {
	this.maxH=180;
	this.minH=100;
	this.maxW=100;
	this.minW=50;
	this.height=Math.floor((this.minH + Math.random() * (this.maxH-this.minH+1))*-1);
	this.width=Math.floor((this.minW + Math.random() * (this.maxW-this.minW+1))*-1 );
	this.x=1200;
	this.y=535;
	this.draw=function(){
		ctx.drawImage(prek,this.x,this.y,this.width,this.height);
	}
}
	
var scoreText={
	x:900,
	y:50,
	update:function(text){
		ctx.fillStyle="blue";
		ctx.font="30px Consolas";
		ctx.fillText(text,this.x,this.y);
	}
}

var road = {
	x:0,
	y:530,
	update:function(){
	ctx.drawImage(back,0,0,1200,600);	
	ctx.fillStyle = "#ff9933";
	ctx.fillRect(this.x,this.y, 1200, 75);
	}
}