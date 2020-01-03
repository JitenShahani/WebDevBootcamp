let colors = [
	'rgb(255, 0, 0)',
	'rgb(255, 255, 0)',
	'rgb(0, 255, 0)',
	'rgb(0, 255, 255)',
	'rgb(0, 0, 255)',
	'rgb(255, 0, 255)',
];

let pickedColor = pickColor();
let bodyColor = document.body.style.backgroundColor;

//#region Populate variables with DOM selectors
let squares = document.querySelectorAll('.square');
let colorDisplay = document.querySelector('#colorDisplay');
let messageDisplay = document.querySelector('#message');
//#endregion

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	// add click event to squares
	squares[i].addEventListener('click', function() {
		// grab color of clicked square
		let clickedColor = this.style.backgroundColor;
		// compare color to pickedColor
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = 'Correct!';
			changeColors(clickedColor);
		} else {
			this.style.backgroundColor = bodyColor;
			messageDisplay.textContent = 'Try Again';
		}
	});
}

/**
 * This function changes color of all the squares to the correct color.
 * @param {string} color
 */
function changeColors(color) {
	// loop through all colors
	for (let i = 0; i < squares.length; i++) {
		// change each color to match given color
		squares[i].style.backgroundColor = pickedColor;
	}
}

/**
 * This function returns random number between 0 to the length of colors array
 */
function pickColor() {
	let randomNumber = Math.floor(Math.random() * colors.length);
	return colors[randomNumber];
}