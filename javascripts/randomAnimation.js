var startLeft = anime.random(20,80) + '%';
var startTop = anime.random(30,70) + '%';
var startRotate = anime.random(0,360);
var startBorderRadius = anime.random(0,50) + '%';
var startScale = anime.random(0.7,1);

var element = document.querySelectorAll('.random_block');

var animation = anime.timeline({
	targets: element,
	loop: true,
	easing: 'spring(1, 80, 10, 0)',
	delay: (el, i) => i * 50,
});

animation.add({
	left: function() {
		return [startLeft, anime.random(20, 80) + '%'];
	},
	top: function() {
		return [startTop, anime.random(30, 70) + '%'];
	},
	rotate: function() {
		return [startRotate, anime.random(0, 360)];
	},
	borderRadius: function() {
		return [startBorderRadius, anime.random(0,50) + '%'];
	},
	scale: function() {
		return [startScale, anime.random(0.7,1)];
	},
})
.add({
	left: function() {
		return anime.random(20, 80) + '%';
	},
	top: function() {
		return anime.random(30, 70) + '%';
	},
	rotate: function() {
		return anime.random(0, 360)
	},
	borderRadius: function(){
		return anime.random(0,50) + '%';
	},
	scale: function() {
		return anime.random(0.7,1);
	},
})
.add({
	left: function() {
		return anime.random(20, 80) + '%';
	},
	top: function() {
		return anime.random(30, 70) + '%';
	},
	rotate: function() {
		return anime.random(0, 360)
	},
	borderRadius: function(){
		return anime.random(0,50) + '%';
	},
	scale: function() {
		return anime.random(0.7,1);
	},
})
.add({
	left: function() {
		return anime.random(20, 80) + '%';
	},
	top: function() {
		return anime.random(30, 70) + '%';
	},
	rotate: function() {
		return anime.random(0, 360)
	},
	borderRadius: function(){
		return anime.random(0,50) + '%';
	},
	scale: function() {
		return anime.random(0.7,1);
	},
})
.add({
	left: function() {
		return anime.random(20, 80) + '%';
	},
	top: function() {
		return anime.random(30, 70) + '%';
	},
	rotate: function() {
		return anime.random(0, 360)
	},
	borderRadius: function(){
		return anime.random(0,50) + '%';
	},
	scale: function() {
		return anime.random(0.7,1);
	},
})
.add({
	left: function() {
		return anime.random(20, 80) + '%';
	},
	top: function() {
		return anime.random(30, 70) + '%';
	},
	rotate: function() {
		return anime.random(0, 360)
	},
	borderRadius: function(){
		return anime.random(0,50) + '%';
	},
	scale: function() {
		return anime.random(0.7,1);
	},
})
.add({
	left: function() {
		return anime.random(20, 80) + '%';
	},
	top: function() {
		return anime.random(30, 70) + '%';
	},
	rotate: function() {
		return anime.random(0, 360)
	},
	borderRadius: function(){
		return anime.random(0,50) + '%';
	},
	scale: function() {
		return anime.random(0.7,1);
	},
})
.add({
	left: startLeft,
	top: startTop,
	rotate: startRotate,
	borderRadius: startBorderRadius,
	scale: startScale,
});

