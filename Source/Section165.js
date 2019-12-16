// @ts-ignore

let colors = ['red', 'orange', 'yellow'];

function myForEach(arr, func) {
	for (let i = 0; i < arr.length; i++) {
		func(arr[i]);
	}
}

// Method 1
myForEach(colors, alert);

// Method 2
myForEach(colors, function(color){
	console.log(color);
});

// Invole myForEach just like forEach
Array.prototype.myForEach = function(func) {
	for (let i = 0; i < this.length; i++) {
		func(this[i]);
	}
}
colors.myForEach(alert);