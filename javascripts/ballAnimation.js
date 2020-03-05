var element = document.querySelectorAll(".animation_ball");

var animation = anime.timeline({
	targets: element,
	loop: true,
	duration: 3000,
	opacity: anime.stagger(-0.1,{start: 1}),
	scale: anime.stagger(-0.05,{start: 1}),
});

animation.add({
	left: ['20%','80%'],
	top:[
		{value: ['70%','30%'], easing: 'easeInOutQuad', duration: 500},
		{value: ['30%','70%'], easing: 'easeInOutQuad', duration: 500},
		{value: ['70%','30%'], easing: 'easeInOutQuad', duration: 500},
		{value: ['30%','70%'], easing: 'easeInOutQuad', duration: 500},
		{value: ['70%','30%'], easing: 'easeInOutQuad', duration: 500},
		{value: ['30%','70%'], easing: 'easeInOutQuad', duration: 500},
	],
	easing: 'easeInOutQuad',
	delay: (el, i) => i * 15,
})
.add({
	left: ['80%','20%'],
	top:[
		{value: ['70%','30%'], easing: 'easeInOutQuad', duration: 500},
		{value: ['30%','70%'], easing: 'easeInOutQuad', duration: 500},
		{value: ['70%','30%'], easing: 'easeInOutQuad', duration: 500},
		{value: ['30%','70%'], easing: 'easeInOutQuad', duration: 500},
		{value: ['70%','30%'], easing: 'easeInOutQuad', duration: 500},
		{value: ['30%','70%'], easing: 'easeInOutQuad', duration: 500},
	],
	easing: 'easeInOutQuad',
	delay: (el, i) => i * 15,
});
