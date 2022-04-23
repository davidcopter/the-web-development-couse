// function
// make calculate sum of 2 number (x, y)
// function name(params) {
//   // code
// }
function sum(x, y) {
  let result = x + y;

  return result;
}

const total1 = sum(1, 2); // 3
// const total1 = 1 + 2;
console.log('Total1: ', total1);
// function sum(x(1), y(2)) {
//   let result = 1 + 2;

//   return 3;
// }

const total2 = sum(100000, 99999);
// const total2 = 100000 + 99999;
console.log('Total2: ', total2);

// console.log(sum(1, 2));

/**
 * 1. Input
 * 2. Process
 * 3. Output
 */
const items = [10, 20, 30, 99];
function calTotalPrice(items) {
  let priceResult = 0;
  for (let i = 0; i < items.length; i++) {
    priceResult = priceResult + items[i];
  }
  return priceResult;
}

const productItems = [10, 20, 30, 99];
const productItems2 = [1000, 10000000, 999999, 1];
const totalPrice = calTotalPrice(productItems); // 159
// function calTotalPrice(productItems) {
//   let priceResult = 0;
//    productItems.length [10, 20, 30, 99] => 4
//   for (let i = 0; i < 4; i++) {
//     priceResult = priceResult + productItems[i];
// 0 : priceResult = 0 + 10; 10
// 1 : priceResult = 10 + 20; 30
// 2 : priceResult = 30 + 30; 60
// 3 : priceResult = 60 + 99; 159
//   }
// priceResult = 159
//   return priceResult; // 159
// }

console.log('totalPrice is ', totalPrice);

// var let const: variable scope
let dog = 999;
const x = true;
// begin scope
if (true) {
  var something = 'Hello, World';
  let dog = 'my dog';
  const x = 10;

  console.log('Inner something: ', something);
  console.log('Inner dog: ', dog);
  console.log('Inner x: ', x);
}
// end scope

console.log('Outer something: ', something);
console.log('Outer dog: ', dog);
console.log('Outer x: ', x);

var ten = 10;

function plus10(x) {
  let nine = 9;
  return x + ten;
}

console.log('Nine', nine);
console.log('9 + ten : ', plus10(9));

// Homework
// Grading progeam
// รับค่าจาก prompt() นำค่าที่ได้ไปคำนวนเกรด 
// โดยให้ทำฟังก์ชั่นคำนวณเกรด ซึ่ง return เกรด a, b ,c ...
// และแสดงคะแนน และผลเกรดออกทาง log
function calculateGrade(...){
  // doing
}

const stdScore = prompt(...)

console.log(...)

