var element = document.querySelectorAll('.animation_block');
var animation = anime.timeline({
	loop: true
});
animation.add({
	targets: element,
	borderRadius: '50%',
	easing: 'easeInOutCubic',
	scale: {value: .1, easing: 'easeOutSine', duration: 500},
	delay: (el, i) => i * 100,
})
.add({
	targets: element,
	borderRadius: '0%',
	easing: 'easeInOutCubic',
	scale: {value: 1, easing: 'easeOutSine', duration: 500},
	rotate: 90,
	delay: (el, i) => i * 100,
});