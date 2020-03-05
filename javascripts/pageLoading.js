var loadingAnimation = anime.timeline({
	delay: 50,
});


loadingAnimation.add({
	targets: '.section .title_section',
	height: ['0%','100%'],
	easing: 'easeInOutQuart',
})
.add({
	targets: '.menu_button',
	scale: [0,1],
	easing: 'easeInOutQuart',
});
