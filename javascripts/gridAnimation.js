var element = document.querySelectorAll(".grid_block");

var animation = anime.timeline({
	loop: true,
	targets: element,
});

animation.add({
	scale: [
		{value: .1, easing: 'easeOutSine', duration: 500},
		{value: 1, easing: 'easeInOutQuad', duration: 1200}
	],
	rotateZ: anime.stagger([0, 90], {grid: [11, 5], from: 'center', axis: 'x'}),
	delay: anime.stagger(200, {grid: [11, 5], from: 'center'})
})
.add({
	scale: [
		{value: .1, easing: 'easeOutSine', duration: 500},
		{value: 1, easing: 'easeInOutQuad', duration: 1200}
	],
	rotateZ: anime.stagger([0, 90], {grid: [11, 5], from: 'first', axis: 'z'}),
	delay: anime.stagger(200, {grid: [11, 5], from: 'first'})
})
.add({
	scale: [
		{value: .1, easing: 'easeOutSine', duration: 500},
		{value: 1, easing: 'easeInOutQuad', duration: 1200}
	],
	rotateZ: anime.stagger(0, {grid: [11, 5], from: 'last', axis: 'z'}),
	delay: anime.stagger(200, {grid: [11, 5], from: 'last'})
});