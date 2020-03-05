var opacityIn = [0,1];
var opacityOut = [1,0];
var easingIn = 'spring(1, 80, 10, 0)';
var easingOut = 'easeInOutExpo';
var delayInOut = (el, i) => i * 50;

var textWrapper1 = document.querySelector('.title .letters-1');
var textWrapper2 = document.querySelector('.title .letters-2');
textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter letter-1'>$&</span>");
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter letter-2'>$&</span>");

var titleAnimation = anime.timeline({
	delay: delayInOut,
	loop: true,
})

titleAnimation.add({
	targets: '.title .letter-1',
	translateX: [-150,0],
	opacity: opacityIn,
	easing: easingIn
})
.add({
	targets: '.title .letter-1',
	translateX: [0,150],
	opacity: opacityOut,
	easing: easingOut
})
.add({
	targets: '.title .letter-2',
	translateY: [-50,0],
	opacity: opacityIn,
	easing: easingIn
})
.add({
	targets: '.title .letter-2',
	opacity: opacityOut,
	easing: easingOut
})
.add({
	targets: '.title .letter-3',
	scale: [3,1],
	opacity: opacityIn,
	easing: easingIn
})
.add({
	targets: '.title .letter-3',
	scale: [1,0],
	opacity: opacityOut,
	easing: easingOut
});