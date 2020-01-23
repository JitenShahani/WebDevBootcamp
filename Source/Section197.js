// @ts-nocheck

//#region Variable defination
let numOfSquares = 6;
let colors = [];
let pickedColor;
let bodyColor = document.body.style.backgroundColor;
//#endregion

//#region DOM selectors
let squares = document.querySelectorAll('.square');
let colorDisplay = document.querySelector('#colorDisplay');
let messageDisplay = document.querySelector('#message');
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
let modeButtons = document.querySelectorAll('.mode')
//#endregion

resetButton.addEventListener('click', function () {
	reset()
});

init();

/**
 * This function gets fired on page load
 */
function init() {
	setupModeButtons();
	setupSquares();
	reset();
}

/**
 * This function removed the selected style and display desired squares depending on difficulty
 */
function setupModeButtons() {
	for (let i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener('click', function () {
			modeButtons[0].classList.remove('selected');
			modeButtons[1].classList.remove('selected');
			this.classList.add('selected');

			this.textContent === 'Easy' ? numOfSquares = 3 : numOfSquares = 6;
			reset();
		});
	}
}

/**
 * This function adds event listener for the squares and display correct or try again message
 */
function setupSquares() {
	for (let i = 0; i < squares.length; i++) {
		// add click event to squares
		squares[i].addEventListener('click', function () {
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

/**
 * This function does the job of easy & hard buttons - refactored code
 */
function reset() {
	// reset messageDisplay value to blank
	messageDisplay.textContent = '';
	// change h1 background color to body color;
	h1.style.backgroundColor = 'steelblue';
	// generate all new colors
	colors = generateRandomColors(numOfSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	// change colors of squares
	for (let i = 0; i < squares.length; i++) {
		// hide last 3 squares in case of Easy Mode
		if (colors[i]) {
			squares[i].style.display = 'block';
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = 'none';
		}

		// apply color to squares
		squares[i].style.backgroundColor = colors[i];
	}
	// reset button caption
	if (resetButton.textContent === 'Play Again?') {
		resetButton.textContent = 'New Colors';
	}
}