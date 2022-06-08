	// CANVAS
	var canvas = document.getElementById("canvas");
	var ctx= canvas.getContext("2d");
	
	
	//IMAGES
	var back= new Image();
	back.src="obrazky/back.png"
	var ball=new Image();
	ball.src='obrazky/ball.png';
	var prek= new Image();
	prek.src="obrazky/prek.png";
	var mechanics = new Image();
	mechanics.src="obrazky/mechanics.png";
	var boom = new Image();
	boom.src="obrazky/boom.png";
	var mOn = new Image();
	mOn.src = "obrazky/unmute.png";
	var mOff = new Image();
	mOff.src = "obrazky/mute.png";
	
	
	
	//AUDIO
	var jumpaudio= new Audio();
	jumpaudio.src="zvuky/jump.mp3";
	var pop= new Audio();
	pop.src="zvuky/pop.mp3";
	
	
	
	
	
	// HELP VARIABLES	
	var g = true;
	var jumping=true;
	var sound = true;
	var gover = false;
	var maxO=500;
	var minO=300;
	var intvl = 1;
	var s = 1;
	var maxsc = 0;
	var clickX = 30;
	var clickY = 500;
	

	
	// POLE
	var obstacles = [];
	