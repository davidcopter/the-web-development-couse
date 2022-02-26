# Week 3

## Introduction to JavaScript
>  JavaScript (/ˈdʒɑːvəskrɪpt/),[10] often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.[11] Over 97% of websites use JavaScript on the client side for web page behavior,[12] often incorporating third-party libraries.[13] All major web browsers have a dedicated JavaScript engine to execute the code on users' devices. - [Wiki](https://en.wikipedia.org/wiki/JavaScript)

- JavaScript is the world's most popular programming language.
- JavaScript is the programming language of the Web.
- JavaScript is easy to learn.

[w3schools](https://www.w3schools.com/js/)

## How to use JavaScript in a web page

[JavaScript Where To](https://www.w3schools.com/js/js_whereto.asp)

### JavaScript in <body>

### External JavaScript

External file: myScript.js
```javascript
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
```

External scripts are practical when the same code is used in many different web pages.

JavaScript files have the file extension .js.

To use an external script, put the name of the script file in the src (source) attribute of a <script> tag:

```javascript
<script src="myScript.js"></script>
```

You can place an external script reference in <head> or <body> as you like.

The script will behave as if it was located exactly where the <script> tag is located.

### JavaScript Output

#### avaScript Display Possibilities

JavaScript can "display" data in different ways:

- Writing into an HTML element, using `innerHTML`.
- Writing into the HTML output using `document.write()`.
- Writing into an alert box, using `window.alert()`
- Writing into the browser console, using `console.log()`.

### Variables

4 Ways to Declare a JavaScript Variable:
- Using var
- Using let
- Using const
- Using nothing

### What are Variables?

> Variables are containers for storing data (storing data values).

In this example, x, y, and z, are variables, declared with the `var`keyword:
```javascript
var x = 5;
var y = 6;
var z = x + y;
```

In this example, x, y, and z, are variables, declared with the `let` keyword:
```javascript
let x = 5;
let y = 6;
let z = x + y;
```

https://www.w3schools.com/js/js_variables.asp

### Operators

- Arithmetic Operators: +, -, *, /, ++, -- and etc.
- Assignment Operators: =, +=, -=, *=,  /= and etc.
- String Operators: +, += and etc
- Comparison Operators: ==, ===, !=, !===, >, <, <=, >=, ?
- Logical Operators: &&, ||, and !

https://www.w3schools.com/js/js_operators.asp


### Data type

- Strings: let carName1 = "Volvo XC60";
- Numbers: let x1 = 34.00; 
- Booleans: true or false.
- Arrays: const cars = ["Saab", "Volvo", "BMW"];
- Objects: const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
- Undefined: let car;    // Value is undefined, type is undefined
- Empty Values: let car = "";    // The value is "", the typeof is "string"

### Arrays

```javascript
const cars = ["Saab", "Volvo", "BMW"];
const cars = new Array("Saab", "Volvo", "BMW");
```

#### Accessing Array Elements

```javascript
const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0];
```

### Object

>  an object object_name is defined. Each member of an object is a key: value pair separated by commas and enclosed in curly braces {}.

```javascript
const object_name = {
   key1: value1,
   key2: value2
}
```

#### Accessing Object Properties

1.  Using dot Notation: objectName.key
2.  
```javascript
const person = { 
    name: 'John', 
    age: 20, 
};

// accessing property
console.log(person.name); // John
```

2. Using bracket Notation: objectName["propertyName"]
3. 
```javascript
const person = { 
    name: 'John', 
    age: 20, 
};

// accessing property
console.log(person["name"]); // John
```


```javascript
// object creation
const person = { 
    name: 'John',
    age: 20
};
console.log(typeof person); // object
```

### Popup Boxes

JavaScript has three kind of popup boxes: Alert box, Confirm box, and Prompt box.

#### Alert Box

```javascript
alert("I am an alert box!");
```

#### Confirm Box

```javascript
if (confirm("Press a button!")) {
  txt = "You pressed OK!";
} else {
  txt = "You pressed Cancel!";
}
```

#### Prompt Box

```javascript
let person = prompt("Please enter your name", "Harry Potter");
let text;
if (person == null || person == "") {
  text = "User cancelled the prompt.";
} else {
  text = "Hello " + person + "! How are you today?";
}
```
