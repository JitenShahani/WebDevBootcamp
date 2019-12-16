// Create secretNumber
let secretNumber = 4;

// ask user for guess
let guess = prompt('Guess a Number');

// Check Guess
if (Number(guess) === 4) {
	alert('YOU GOT IT RIGHT');
} else if (Number(guess) < secretNumber) {
	alert('Too High. Guess again!')
} else {
	alert('Too Low. Guess Again');
}