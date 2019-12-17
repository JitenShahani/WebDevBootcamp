let button = document.querySelector('button');
let isPurple = false;

button.addEventListener('click', function () {
	if (isPurple) {
		document.body.style.backgroundColor = 'white';
	} else {
		document.body.style.backgroundColor = 'purple'
	}
	isPurple = !isPurple;
});

