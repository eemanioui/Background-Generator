var css = document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body= document.getElementById("gradient");
var button = document.getElementById("generator");


function setGradient (){

	 body.style.background =
 "linear-gradient(to right," + color1.value +"," + color2.value +")";

  css.textContent = body.style.background + ";";
}


/*
function random(){
	var rColor = "#" + Math.floor(Math.random()*16777215)tostring(16);
	return rColor;
}

function randomize(){
 rcolor1 = random();
 rcolor2= random();
 body.style.background =
 "linear-gradient(to right, "+ color1 +", "+ rcolor2 +")";
 css.textContent = body.style.background + ";";
}

color1.value = rcolor1;
color2.value = rcolor2;
*/



color1.addEventListener("input", setGradient);


color2.addEventListener("input", setGradient);

/*

button.addEventListener("click", randomize);


*/
   

