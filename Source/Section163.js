console.log(printReverse([1, 2, 3, 4, 5]));
console.log(isUniform([1, 1, 1, 1]));
console.log(sumArray([10, 3, 10, 4]));
console.log(max([101, 3, 10, 4, 27, 10]));

function printReverse(arr) {
	for (let i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i]);
	}
}

function isUniform(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== arr[0]) {
			return false;
		}
	}
	return true;
}

function sumArray(arr) {
	let result = 0;

	for (let i = 0; i < arr.length; i++) {
		result += arr[i];
	}
	return result;
}

function max(arr) {
	let max = arr[0];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}