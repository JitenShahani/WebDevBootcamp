// @ts-nocheck

$('h1').on('click', function() {
	$(this).css('color', 'purple');
});

$('input').on('keypress', function() {
	console.log('Keypressed!');
});

$('button').on('mouseenter', function() {
	$(this).css('font-weight', 'bold');
});

$('button').on('mouseleave', function() {
	$(this).css('font-weight', 'normal');
});