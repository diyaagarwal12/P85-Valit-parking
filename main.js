canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");//Create a reference for canvas 

var win_loose = document.getElementById("wl");

greencar_width=75;
greencar_height=100;//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x=5;
greencar_y=225;//Set initial position for a car image.

function add() {
	
	background_imageTag=new Image();
	background_imageTag.onload=uploadBackground;
	background_imageTag.src=background_image;
	
		greencar_imageTag=new Image();
		greencar_imageTag.onload=uploadgreencar;
		greencar_imageTag.src=greencar_image;
	//upload car, and background images on the canvas.
}

function uploadBackground() {
	ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);//Define function ‘uploadBackground’

}

function uploadgreencar() {
	ctx.drawImage(greencar_imageTag,greencar_x,greencar_y,greencar_width,greencar_height);//Define function ‘uploadgreencar’.

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0)
	{
		greencar_y = greencar_y - 10;
		console.log("When up arrow is pressed,  x = " + greencar_x + " | y = " +greencar_y);
		 uploadBackground();
		 uploadgreencar();
	}
	if(greencar_x==425,greencar_y==95){
		document.getElementById("wl").innerHTML= "YOU WON!! You have parked the car at right place.";	
	}
	else{
		document.getElementById("wl").innerHTML= "Not yet car is parked at the right place try for some more time";	
	}
}
function down()
{
	if(greencar_y <=500)
	{
		greencar_y =greencar_y+ 10;
		console.log("When down arrow is pressed,  x = " + greencar_x + " | y = " +greencar_y);
		uploadBackground();
		 uploadgreencar();
	}
	if(greencar_x==425,greencar_y==95){
		document.getElementById("wl").innerHTML= "YOU WON!! You have parked the car at right place.";	
	}
	else{
		document.getElementById("wl").innerHTML= "Not yet car is parked at the right place try for some more time";	
	}
}
function left()
{
	if(greencar_x >= 0)
	{
		greencar_x =greencar_x - 10;
		console.log("When left arrow is pressed,  x = " + greencar_x + " | y = " +greencar_y);
		uploadBackground();
		greencarrover();
	}
	if(greencar_x==425,greencar_y==95){
		document.getElementById("wl").innerHTML= "YOU WON!! You have parked the car at right place.";	
	}
	else{
		document.getElementById("wl").innerHTML= "Not yet car is parked at the right place try for some more time";	
	}
}
function right()
{
	if(greencar_x <= 700)
	{
		greencar_x =greencar_x + 10;
		console.log("When right arrow is pressed,  x = " + greencar_x + " | y = " +greencar_y);
		uploadBackground();
		uploadgreencar();
   }
   if(greencar_x==425,greencar_y==95){
	document.getElementById("wl").innerHTML= "YOU WON!! You have parked the car at right place.";	
}
else{
	document.getElementById("wl").innerHTML= "Not yet car is parked at the right place try for some more time";	
}
}