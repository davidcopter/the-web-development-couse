// Logical
// Making decision
// 1. if statement: ถ้า (condition: true/false) -> เราจะ...
// - 30 > 1 จริงหรือไม่? ... true
if (30 > 1) {
  console.log('Great');
}
// if (true) {
//   console.log('Great');
// }

// - 30 > 100 จริงหรือไม่? ...  false
if (30 > 100) {
  console.log('Cool');
}
// if (false) {
//   console.log('Cool');
// }

if (true) {
  console.log('TRUE');
}

// 2. if else statement;
if (true) {
  // TRUE
} else {
  // false
}

const isMonday = false;
// isMonday (true) === true จริงหรือไม่? ... true
// isMonday (false) === true จริงหรือไม่? ... false
if (isMonday === true) {
  // correct
  console.log('Today is monday');
} else {
  // incorrect
  console.log('No!');
}

// if (false === true) {

// 3. if-else elseif statement
if (1 > 2) {
  alert('Wow!!');
} else if (1 >= 1) {
  alert('Big Cool~');
} else {
  console.log('Incorrect!');
}
