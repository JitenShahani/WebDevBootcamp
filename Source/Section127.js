// Exercise 1
let x = 10;
let y = "a";

console.log(y === "b" || x >= 10);

// Exercise 2
let a = 3;
let b = 8;

let returnValue = !(a == 3 || a === b) && !(b != 8 && a <= b);
console.log(returnValue)

// Exercise 3
let str = "";
let msg = "haha!";
let isFunny = "false";

console.log(!((str || msg) && isFunny));