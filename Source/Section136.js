// Version 1
let answer = prompt('are we there yet?');

while (answer !== "yes" && answer !== "yeah") {
	answer = prompt('are we there yet?');
}

alert('YAY! WE MADE IT!!!');

// Version 2
let anotherAnswer = prompt('are we there yet?')

while (anotherAnswer.indexOf("yes") === -1) {
	anotherAnswer = prompt('are we there yet?');
}

alert('YAY! WE MADE IT!!!');