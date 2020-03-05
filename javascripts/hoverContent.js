function hoverContentRight(element){
	anime({
		targets: element,
		esing: 'easeInOutQuart',
		translateX: 20
	})
};

function outContentRight(element){
	anime({
		targets: element,
		esing: 'easeInOutQuart',
		translateX: 0
	})
};

function hoverContentLeft(element){
	anime({
		targets: element,
		esing: 'easeInOutQuart',
		translateX: -20
	})
};

function outContentLeft(element){
	anime({
		targets: element,
		esing: 'easeInOutQuart',
		translateX: 0
	})
};

function hoverMenuContent(element){
	anime({
		targets: element,
		esing: 'spring(1, 80, 10, 0)',
		scale: 1.2,
	})
};

function outMenuContent(element){
	anime({
		targets: element,
		esing: 'spring(1, 80, 10, 0)',
		scale: 1,
	})
};