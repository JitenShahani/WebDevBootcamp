let age = 18;

if (age < 18) {
	console.log('Sorry, you are old enough to enter the venue');
} else if (age < 21) {
	console.log('You can enter, but cannot drink');;
} else {
	console.log('Come on in. You can drink');
}

// Exercise
let myAge = 21;

if (myAge < 0) {
	console.log('Come back once you\'re you of the womb');
}

if (myAge === 21) {
	console.log('Happy 21st Birthday!');
}

if (myAge % 2 === 1) {
	console.log('Your age is odd!');
}

if (myAge > 0 && Math.sqrt(myAge) % 1 === 0) {
	console.log('Your age is Perfect Square!');
}