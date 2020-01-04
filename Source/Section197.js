let colors = generateRandomColors(6);

//#region Populate variables with DOM selectors
let squares = document.querySelectorAll('.square');
let colorDisplay = document.querySelector('#colorDisplay');
let messageDisplay = document.querySelector('#message');
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
//#endregion

let pickedColor = pickColor();
let bodyColor = document.body.style.backgroundColor;
colorDisplay.textContent = pickedColor;

//#region Events
resetButton.addEventListener('click', function() {
	// reset messageDisplay value to blank
	messageDisplay.textContent = '';
	// change h1 background color to body color;
	h1.style.backgroundColor = bodyColor;
	// generate all new colors
	colors = generateRandomColors(6);
	// pick a new random color from array
	pickedColor = pickColor();
	// change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	// change colors of squares
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
});
//#endregion

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
			resetButton.textContent = 'Play Again?';
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
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

/**
 * This function loops through n times and call randomColor() function to generate a color
 * @param {number} num
 */
function generateRandomColors(num) {
	// make an array
	let arr = [];
	// repeat num times
	for (let i = 0; i < num; i++) {
		// get random color and push into arr
		arr.push(randomColor());
	}
	// return that array
	return arr;
}

/**
 * This function generates a random color
 */
function randomColor() {
	// pick a 'red' between 0 - 255
	let red = Math.floor(Math.random() * 256);
	// pick a 'green' between 0 - 255
	let green = Math.floor(Math.random() * 256);
	// pick a 'blue' between 0 - 255
	let blue = Math.floor(Math.random() * 256);

	return `rgb(${red}, ${green}, ${blue})`;
}