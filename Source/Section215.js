// @ts-nocheck

$('input').keypress(function(event) {
	if (event.which === 13) {
		alert('YOU HIT ENTER!');
	}
	console.log(event);
});