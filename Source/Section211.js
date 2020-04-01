// @ts-nocheck

// NOTE: text function behaves like JavaScript's textContent.
// NOTE: html function behaves like JavaScript's innerHtml.

// NOTE: If second parameter is not given that attr function will work like getter and will display the value of that attribute.

// NOTE: Val function extracts the value of an input element. It is a wrapper of JavaScript's value.
// NOTE: If the function is called without parameter, then it will return the value of input element.

$('h1').text('New Header!!!');
$('li').html('<a href="www.google.co.in">GO TO GOOGLE</a>');

$('input').attr('type', 'checkbox');
$('input').attr('type', 'text');

let textValue = $('input:text').val();
console.log(textValue);

$('input:text').val('Jitendra S. Shahani');

console.log($('select').val());

$('li').removeClass('wrong');
$('li').addClass('correct');

// NOTE: A better option is to toggle class instead of removing and adding a class.

$('li').first().toggleClass('done');