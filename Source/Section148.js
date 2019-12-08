function isEven (value) {
	return value % 2 === 0;
}

function factorial(value) {
	let returnValue = 1;
	
	if (value === 0) {
		return 1;
	}
	for (let i = value; i >= 1; i--) {
		returnValue *= i;
	}

	return returnValue;
}

function kababToSnake (value) {
	let returnValue =  value.replace('/-/g', '_');
	return returnValue;
}

console.log(isEven(4));
console.log(isEven(21));
console.log(isEven(68));
console.log(isEven(333));

console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(0));

console.log(kababToSnake('hello-world'));
console.log(kababToSnake('dogs-are-awesome'));
console.log(kababToSnake('blah'));
