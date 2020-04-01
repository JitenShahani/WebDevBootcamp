// @ts-nocheck

$('div').css('background', 'purple');
$('.highlight').css('width', '200px');
$('#third').css('border', '1px solid orange');

// NOTE: first() is a JavaScript method which is slower than CSS first-of-type
$('div:first-of-type').css('color', 'pink');