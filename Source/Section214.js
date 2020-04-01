// @ts-nocheck

$('h1').click(function() {
	alert('h1 clicked!');
});

$('button').click(function() {
	let text = $(this).text();
	console.log('You clicked ' + text);
	$(this).css('background-color', 'pink');
});