console.log('Hello, World');

// . dot notation
document.getElementById('heading1').innerHTML = 'Hi, Im copter';

// Variable
// 1. Var
var name = 'Copter'; // string
var distance = 0; // number
var currency = 1.234; // number
console.log(name);
console.log('Copter');

console.log(distance, currency);
console.log(0, 1.234);

// Trick
console.log('This is a distance value: ', distance);
// console.log("Distance: ", 1.234);
console.log(currency);

// 2. Let
let city = 'New York';
console.log(city); // New York
city = 'Bangkok';
console.log(city); // Bangkok

// * variable scope

// Const
const color = 'Red';
console.log('Color: ', color); // Red
// color = 'Yellow';
// console.log('Color: ', color); // Error:::
const PI = 3.14;

// Trick;
// camelCase
const todayIsMonday = 0; // number
const isMonday = false; // Boolean
console.log('isMonday: ', isMonday);

document.getElementById('heading1').innerHTML = color;

// Operators
// Arithmetic Operators
console.log(1 + 1);

const thb = 100;
const usd = 35;
const total = thb * usd;
console.log('My money is: ', total);
console.log('My money is: ', total - 300);
console.log('My money is: ', total + 3000);

// Assignment Operators
let a = 8; // a = 8
a += 10; // a = a + 10 => 18
a += 15; // a = a + 15 => 33
a -= 3; // a = a - 3 => 30

console.log('A: ', a);
