// Create secretNumber
let secretNumber = 4;

// ask user for guess
let guess = prompt('Guess a Number');
guess = Number(guess);

// Check Guess
if (guess === 4) {
	alert('YOU GOT IT RIGHT');
} else if (guess < secretNumber) {
	alert('Too High. Guess again!')
} else {
	alert('Too Low. Guess Again');
}