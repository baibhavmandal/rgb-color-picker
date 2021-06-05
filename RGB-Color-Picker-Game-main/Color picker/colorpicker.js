var colors = [];
var squares = document.getElementsByClassName("square");
var targetColor;
var colorDisp = document.getElementById("colordisp");
var res= document.getElementById("result");
var resetbutt= document.getElementById("resetbutt");
var options=document.getElementsByClassName("options")[0];
var header= document.getElementsByClassName("header")[0];

//To Generate rgb colors
function rgbGenerator()
{
	var r,g,b;
	r = Math.floor(Math.random()*255)+1;
	g = Math.floor(Math.random()*255)+1;
	b = Math.floor(Math.random()*255)+1;
	var x = "rgb("+r+", "+g+", "+b+")";
	return x;
}

//To create the color array by calling the rgb generator function
function createColorArray() {
	for(var i=0;i<6;i++)
	{
		var x= rgbGenerator();
		colors.push(x);
		squares[i].style.background = colors[i];
	}
}

//To color all the squares to the target color when choosed correcty
function colorAll(targetColor) {
	for(var i = 0; i<squares.length; i++)
		squares[i].style.background = targetColor;
}

createColorArray();
targetColor = colors[Math.floor(Math.random()*6)];
colorDisp.textContent = targetColor;

resetbutt.addEventListener("click",function(){
	colors = [];
	createColorArray();
	targetColor = colors[Math.floor(Math.random()*6)];
	colorDisp.textContent = targetColor;
	res.textContent= "";
	options.style.background = "#f06d06" ;
	header.style.borderColor= "whitesmoke" ;
	this.textContent = "New Colors";

	/*for(var i = 0 ;i < squares.length;i++)
	{
		squares[i].style.background = colors[i];
	}*/
});

for(var i = 0 ;i < squares.length;i++)
{
	 
	squares[i].addEventListener("click",function(){
		var pickedColor = this.style.background;
		if(pickedColor === targetColor)
		{
			res.textContent =" You are Correct";
			colorAll(targetColor);
			options.style.background = targetColor;
			header.style.borderColor= targetColor;
			resetbutt.textContent = "Play Again";
		}
		else
		{
			res.textContent ="Think carefully";
			this.style.background = "#f06d06";
		}
	});
}
