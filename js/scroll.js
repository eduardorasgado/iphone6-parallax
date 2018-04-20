const $iphone = document.getElementById('iphone');
const $mask = document.getElementById('mask');

window.addEventListener('scroll', function(e){
	console.log(window.scrollY);
	$mask.style.backgroundPosition = window.scrollY/5+'px';
});