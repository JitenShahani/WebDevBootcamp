let lis = document.querySelectorAll('li');

for (let i = 0; i < lis.length; i++) {
	lis[i].addEventListener('mouseover', function() {
		this.classList.toggle('selected');
	});

	lis[i].addEventListener('mouseout', function() {
		this.classList.remove('selected');
	});

	lis[i].addEventListener('click', function() {
		this.classList.toggle('done');
	});
}