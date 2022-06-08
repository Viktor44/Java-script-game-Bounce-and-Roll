var game ={
	fr:0,
	scr:0,
	menu:function(){
		clear();
		ctx.fillStyle="blue";
		ctx.font="60px Consolas";
		ctx.fillText("BOUNCE AND ROLL",320,150);
		ctx.font="30px Consolas";
		ctx.fillText("Press SPACE to know how to play",300,250);
		ctx.fillText("Press ENTER to play",400,350);
		if (sound == true)
			ctx.drawImage(mOn,clickX,clickY,60,60);
		else if (sound == false)
			ctx.drawImage(mOff,clickX,clickY,60,60);
		window.addEventListener("keydown",key1);
		window.addEventListener("keyup",key2);
	},
	mech:function(){
		clear();
		ctx.drawImage(mechanics,0,0,1200,600);
		ctx.fillStyle="black";
		ctx.font="30px Consolas";
		ctx.fillText("ESC->MENU",30,30);
	},
	start:function(){
		clear();
		if (gover == false)
		this.interval=setInterval(this.updateGame,intvl);
		obstacles = [];
		g = false;

	},
	updateGame:function(){
		for(i=0;i<obstacles.length;i++){
		if(player.crashWith(obstacles[i])){
			game.over();
			player.character();
			if (maxsc < this.scr)
				maxsc = scr;
			this.scr = 0;
			return;
			}
		}
		if (gover == true)
			clearInterval(this.interval);
		clear();
		road.update();
		if(everyinterval(gap)){
			obstacles.push(new prekazka());
			gap=randomO();
			game.fr=0;
		}
		if (game.scr == 15){
			maxO=300;
			minO=170;
			s = 2;
		}
		if (game.scr == 30){
			maxO=250;
			minO=140;
			s = 2.5;
		}
		for(i=0;i<obstacles.length;i++){
			obstacles[i].x-=s;
			obstacles[i].draw();
		}
		scoreText.update("Jumps: "+Math.floor(game.scr));
		player.character();
		player.move();
		game.fr+=1;
		ctx.fillStyle="black";
		 ctx.font="30px Consolas";
		 ctx.fillText("ESC->MENU",30,30);
	},
	esc:function(){
		clearInterval(this.interval);
	},
	over:function(){
		clearInterval(this.interval);
		if (maxsc < this.scr)
				maxsc = this.scr;
		ctx.fillStyle="red";
		ctx.font="60px Consolas";
		ctx.fillText("GAME OVER",450,150);
		ctx.fillStyle="black";
		ctx.font="30px Consolas";
		ctx.fillText("High score: "+maxsc,450,50);
		ctx.fillText("Press ENTER to replay",430,250);
		ctx.fillStyle="black";
		ctx.font="30px Consolas";
		ctx.fillText("ESC->MENU",30,30);
		obstacles=0;
		if (sound == true)
			pop.play();
		gover = true;
	}	
}

game.menu();