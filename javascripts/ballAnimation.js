var element_1 = document.querySelectorAll(".animation_ball-1");
var element_2 = document.querySelectorAll(".animation_ball-2");


var animation1 = anime.timeline({
	targets: element_1,
	loop: true,
	duration: 3000,
	//opacity: anime.stagger(-0.1,{start: 1}),
	scale: anime.stagger(-0.05,{start: 1}),
});

var animation2 = anime.timeline({
	targets: element_2,
	loop: true,
	duration: 3000,
	//opacity: anime.stagger(-0.1,{start: 1}),
	scale: anime.stagger(-0.05,{start: 1}),
});

animation1.add({
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

animation2.add({
	left: ['20%','80%'],
	top:[
		{value: ['30%','70%'], easing: 'easeInOutQuad', duration: 500},
		{value: ['70%','30%'], easing: 'easeInOutQuad', duration: 500},
		{value: ['30%','70%'], easing: 'easeInOutQuad', duration: 500},
		{value: ['70%','30%'], easing: 'easeInOutQuad', duration: 500},
		{value: ['30%','70%'], easing: 'easeInOutQuad', duration: 500},
		{value: ['70%','30%'], easing: 'easeInOutQuad', duration: 500},
	],
	easing: 'easeInOutQuart',
	delay: (el, i) => i * 15,
})
.add({
	left: ['80%','20%'],
	top:[
		{value: ['30%','70%'], easing: 'easeInOutQuad', duration: 500},
		{value: ['70%','30%'], easing: 'easeInOutQuad', duration: 500},
		{value: ['30%','70%'], easing: 'easeInOutQuad', duration: 500},
		{value: ['70%','30%'], easing: 'easeInOutQuad', duration: 500},
		{value: ['30%','70%'], easing: 'easeInOutQuad', duration: 500},
		{value: ['70%','30%'], easing: 'easeInOutQuad', duration: 500},
	],
	easing: 'easeInOutQuart',
	delay: (el, i) => i * 15,
});