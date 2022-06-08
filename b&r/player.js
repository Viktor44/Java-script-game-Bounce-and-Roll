var player ={
	x:100,
	y:470,
	z:60,
	moveY:0,
	character:function(){
		if (gover == false)
		ctx.drawImage(ball,this.x,this.y,this.z,this.z);
		if (gover == true){
		ctx.drawImage(boom,this.x-25,this.y-45,130,130);
		}
	},
	
	move:function(){
		if(this.y<220){
			this.moveY=2;
			jumping = false;
		}
		this.y=this.y+this.moveY;
		
		if(this.y==470 && this.moveY==2 || this.moveY==-10 ){
			this.moveY=0;
			game.scr+=1;	
		}
		if (this.y > 470){
			this.moveY=-10;
		}
		if (this.moveY == 0)
			jumping = true;
	
	},
	crashWith:function(p){
			
	//if(this.x+60>p.x && this.x<p.x+p.width && this.y+60>p.y){
		//gover = true;
		//return true;
	//}
	
	if ((this.x+this.z == p.x-this.z && this.y > p.y + p.height && this.x<p.x+p.width) || 
		(this.x+this.z > p.x + p.width && this.y+this.z > p.y + p.height && this.x+this.z<p.x) )
		return true;
	
	return false;
	}
}


var movement ={
	jump:function(){
		player.moveY=-2;
	},
	fall:function(){
		player.moveY=2;
	},
	forward:function(){
		player.x+=10;
	},
	backward:function(){
		player.x-=10;
	}
}