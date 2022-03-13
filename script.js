// Data types
// String
'wqdwqdwqdqwd';
'12321321323';

// ' '(single);
// ' '(double);

const message = 'Hello world';
const message1 = "I'm superman";
const message2 = "I'm superman"; // 'I' ... m superman'
const message3 = 'I"m superman';

// airbnb

var carName = 'Volvo XC60';

// Number
1234;
0.123;
1000000 - 1 - 10.12;

// Boolean
true;
false;

// Array [(element)...]
// var cities = ['a', 'b', 'c']
// let cities = ['a', 'b', 'c']
const cities = ['a', 'b', 'c']; // 3
// [(index: 0)'a', (index: 1)'b', (index: 2)'c']
console.log('Cities: ', cities);
// index
console.log('Cities 0: ', cities[0]);

// Objects (key: value)
const person = {
  name: 'John',
  age: 34,
  isFree: false,
};
console.log('Person: ', person);
/// dot notaion (.): obj.key
console.log('Person Name:', person.name);
console.log('Person Age: ', person.age);
// bracket Notation ([...])
console.log('Person Name ([..]): ', person['name']);

// Trick ************************************************
// Array Of Objects [(element), (element), (element)]
// [{}, {}, {}]
const students = [
  { name: 'David', age: 19 }, // 0
  { name: 'Louise', age: 24 }, // 1
  { name: 'Christ', age: 30 }, // 2
  { name: 'David', age: null }, // 3
];
console.log('Students: ', students);
console.log('Students: ', students[1]);
// { name: 'Louise', age: 24 }
// { name: 'Louise', age: 24 }.age = 24
// { name: 'Louise', age: 24 }.xyz = undefinded
console.log('Students age: ', students[1].age);
console.log('Students xyz: ', students[1].xyz);

// undefined
var water = undefined;
// null
const str = null; // next  str = "a"

// trick
// check var type
console.log('Type of students is ', typeof students);
console.log('Type of message is ', typeof message);
console.log('Type of person age is ', typeof person.age);
