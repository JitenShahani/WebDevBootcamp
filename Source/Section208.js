// @ts-nocheck

// NOTE: If type checking is enabled in JavaScript, then use below statement to initialise $
// import * as $ from "jquery";

// NOTE: I could set individual properties of an element in following manner
// $('h1').css('color', 'red');
// $('h1').css('background', 'pink');
// $('h1').css('border', '2px solid purple');

// NOTE: I could create an object and apply multiple styles

let styles = {
	color: 'red',
	background: 'pink',
	border: '2px solid purple'
};

$('h1').css(styles);

$('li').css('color', 'blue');
$('a').css('font-size', '40px');