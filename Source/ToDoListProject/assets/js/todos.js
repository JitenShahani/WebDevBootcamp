// @ts-nocheck

// NOTE: Click method will work on existing element and not on the element that were created in the future.

// NOTE: Upon changing below code, $('li').on('click', function () {}) to on, click will still not work on future elements because the event handler is added while DOM is loaded.

// NOTE: Better option is to target the code on parent element and then mention the child. This will apply event on all future creations.

$(document).ready(function() {
	$('input[type="text"]').focus();
});

$('.fa-plus').on('click', function() {
	$('input[type="text"]').fadeToggle(500, function() {
		if ($(this).css('display') !== 'none') {
			$(this).focus();
		}
	});
});

$('ul').on('click', 'li', function () {
	$(this).toggleClass('completed');
});

$('ul').on('click', 'span', function(event) {
	$(this).parent().fadeOut(1000, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$('input[type="text"]').on('keypress', function(event) {
	if (event.which === 13) {
		let inputValue = $(this).val();
		$('ul').append('<li><span><i class="fa fa-trash"></i></span> ' + inputValue + '</li>');
		$(this).val('') ;
	}
});