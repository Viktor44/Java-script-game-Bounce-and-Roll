function clear(){
	ctx.clearRect(0,0,canvas.width,canvas.width);
} 

function everyinterval(n){
	if(game.fr%n==0) return true;
	return false;
}

function score() {
	for ( i =0;i<obstacles.length;i++){
		if (prekazka.x == player.x)
			game.scr+=1;
	}
}

randomO = function(){
	o = Math.floor(this.minO + Math.random() * (this.maxO-this.minO+1));
	return o;
}		
gap = randomO();

function key1(){
	code = (event.type == "keydown")? true : false;
	if (event.keyCode == 38 && jumping == true){
		movement.jump();
		if (sound == true)
			jumpaudio.play();
	}
	else if (event.keyCode == 39)
		movement.forward();
	else if (event.keyCode == 37)
		movement.backward();
	else if  (event.keyCode == 13){
		game.start();
		player.x=100;
		player.y=470;
		prekazka.x+=1;
		game.scr = 0;
		s = 1;
		maxO=500;
		minO=300;
		gover = false;
	}
	else if (event.keyCode == 32)
		game.mech();
	else if (event.keyCode == 27){
		game.esc();
		game.menu();
		gover = true;
	}
}

function key2(){
	code = (event.type == "keyup")? true : false;
	if (event.keyCode == 38 && jumping == true)
		movement.fall();
	jumping = false;
}

window.onclick= function (event){
	var x = event.pageX;
	var y = event.pageY;
	
	if (sound == true && clickX < x && x < clickX + 60 && y > clickY && y < clickY + 60){
		sound = false;
		game.menu();
	}
	else if (sound == false && clickX < x && x < clickX + 60 && y > clickY && y < clickY + 60){
		sound = true;
		game.menu();
	}
}