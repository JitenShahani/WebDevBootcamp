// @ts-nocheck

// NOTE: If there is some code written after fade effect, then that code will execute before fade completes.

// NOTE: To make sure, write code within a function

// NOTE: Remove method removes an element from the DOM.

// NOTE: Methods to Fade : fadeIn, fadeOut & fadeToggle.

// NOTE: Methods to Slide : slideDown, slideUp & slideToggle.

$('button').on('click', function() {
	$('div').fadeToggle(1000, function() {
		// $(this).remove();
	});
});