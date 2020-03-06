var loadingAnimation = anime.timeline({
	delay: 50,
});


loadingAnimation.add({
	targets: '.section .title_section',
	opacity: [0,1],
	easing: 'easeInOutQuart',
})
.add({
	targets: '.menu_button',
	scale: [0,1],
	easing: 'easeInOutQuart',
})
.add({
	targets: ['.scroll','#scroll_title'],
	opacity: [0,0.5],
	easing: 'easeInOutQuart',
});
