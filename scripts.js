var body = document. querySelector('body');
var css = document.querySelector('h3');
var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var random = document.getElementById('random');

function updateGradient() {
	body.style.background = 'linear-gradient(to right, ' + color1.value + ',' + color2.value + ')';
	css.textContent = body.style.background + ';';
}

function genereateRandomHex(){
	var hexArr = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
	var hex = '#';
	for(var i = 0; i < 6; i++){
		hex += hexArr[Math.floor(Math.random() * hexArr.length)];
	}

	return hex;
}

window.addEventListener('load', function(){
	updateGradient();
});

color1.addEventListener('input', updateGradient);

color2.addEventListener('input', updateGradient);

random.addEventListener('click', function(){
	color1.value = genereateRandomHex();
	color2.value = genereateRandomHex();
	console.log(color1.value, color2.value);
	body.style.background = 'linear-gradient(to right, ' + color1.value + ',' + color2.value + ')';
	css.textContent = body.style.background + ';';
})
