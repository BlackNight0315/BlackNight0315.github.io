var foldState = false;

var colorA = '#86cea5';
var colorB = '#FFFFFF';

var button = document.querySelector('.menu_button');
var lines = document.querySelectorAll('.menu_button .line');

function foldMenu(){
	if(foldState == false){
		anime({
			targets: '.menu',
			width: '20%',
			opacity: 1,
			easing: 'easeInOutExpo'
		})
		anime({
			targets: button,
			background: colorA,
			easing: 'easeInOutExpo'
		})
		anime({
			targets: lines,
			background: colorB,
			easing: 'easeInOutExpo'
		})
		anime({
			targets: '.section',
			width: '80%',
			easing: 'easeInOutExpo'
		})
	}
	if(foldState == true){
		anime({
			targets: '.menu',
			width: '0%',
			opacity: 0,
			easing: 'easeInOutExpo'
		})
		anime({
			targets: button,
			background: colorB,
			easing: 'easeInOutExpo'
		})
		anime({
			targets: lines,
			background: colorA,
			easing: 'easeInOutExpo'
		})
		anime({
			targets: '.section',
			width: '100%',
			easing: 'easeInOutExpo'
		})
	}
	foldState = !foldState;
};