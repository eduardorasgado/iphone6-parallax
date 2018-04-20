const $iphone = document.getElementById('iphone');
const $mask = document.getElementById('mask');

window.addEventListener('scroll', function(e){
	console.log(window.scrollY);
		//limites en la pantalla para mostrar cierto rango del backgrnd
		if(window.scrollY<= 583 && window.scrollY>=400){
			//los 210px del header menos la pos inicial del backgrnd menos scrollY
			$mask.style.backgroundPosition = 310-window.scrollY-57+'px';
		}
		var position = 310-window.scrollY-57;
		$iphone.style.transform = 'rotate('+position*0.02+'deg)';
});