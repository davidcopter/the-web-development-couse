console.log('Starting script...');

// Grade 0-100 point
// 0-50 F
// 51-60 D
// 61-70 C
// 71-80 B
// > 80 A
// const myScore = 1000;
// let myScore = prompt('Enter your score: ');

// // Checking score
// if (myScore >= 0 && myScore <= 50) {
//   // 0-50
//   alert('You got F');
// } else if (myScore > 50 && myScore <= 60) {
//   // 51-60
//   alert('You got D');
// } else if (myScore >= 61 && myScore <= 70) {
//   // 61-70
//   alert('You got C');
// } else if (myScore > 70 && myScore < 81) {
//   // 71-80
//   alert('You got B');
// } else if (myScore > 80 && myScore <= 100) {
//   alert('You got A');
// } else {
//   console.error('Invalid Score', myScore);
// }

// Confirm popup
// ok => true
// cancel => false

// if (confirm('Do you want to delete?')) {
//   console.log('Done');
// }

// ok clicked
// if (true) {
//   console.log('Done');
// }

// Looping
// 1. For Loop
// i++: i = i + 1
// for (let i = 0; i < 5; i++) {
//   // i = 0,1,2,..,4
//   // if (i < 5) doing
//   console.log('Hello, World: i =', i);

//   // i++, 0+1=1, 1+1=2, 2+1=3,.., 4+1=5
// }

// const prices = [15, 20, 25, 10];
// prices.length = 4 element

// let totalPrice = 0;

// 1. for (let i = 0; i < 4; i++)
// for (let i = 0; i < prices.length; i++) {
//   // i: 0,1,2,3,4(x)
//   // totalPrice: 0,15,35,60
//   totalPrice = totalPrice + prices[i];
//   // (1) totalPrice = 0 +  prices[0] => 0 + 15 = 15
//   // (2) totalPrice = 15 + prices[1] => 15 + 20 => 35
//   // (3) totalPrice = 35 + prices[2] => 35 + 25 => 60
//   // (4) totalPrice = 60 + prices[3] => 60 + 10 =>70

//   console.log('Item = ', prices[i]);
//   console.log('Current TotalPrice = ', totalPrice);

//   // i++: 1,2,3,4
// }

// 2. while loop
let count = 0;
// count < 10; 3 < 10 true
// while (true)
// ...
// count < 10; 10 < 10 false
// while (false)
while (count < 3) {
  console.log('Count =', count);
  count++;
}

// 3 dowhile *
let value = true;
do {
  console.log('value : ', value);
  value = false;
  // while (false)
} while (value);
