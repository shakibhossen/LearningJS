// Anything flowing double slashes is an English-language comment.
//Read the comment carefully:they explained the Javascript code.
// A variable is a symbolic name for a value.
// Variables are declared with the let keyword:
// let x; //Declare a variable named x;
// vlaues can be assigned to variable with an=sign
// x = 0; //Now the variable x has the value 0
// console.log(x); // A variable evalutes to its value.

// Javascript supports several types of values

// let x;
// x = 1; // Numbers
// console.log(x);

// let x;
// x = 0.01; // Number can be integer or reals
// console.log(x);

// let x;
// x = "Hello world";  // Strings of text in quatation marks.
// console.log(x);

// let x;
// x = "JavaScript"; // Single qutoe marks also delimit strings
// console.log(x);

// let x;
// x = true; // A Boolean value
// console.log(x);

// let x;
// x = false; // The other Boolean value.
// console.log(x);

// let x;
// x = null; // Null is a special value that means "no value"
// console.log(x);

// let x;
// x = undefined; // Undefined is another special value like null
// console.log(x);

// JavaScript's most important datatype is the object .
// An object is a collection of name/value pairs ,or a string to value map
// let book = {           // Object are enclosed in curly braces
//   topic: "Javascript", // The property "topic"has value "Javascript"
//   edition: 7,          // The property "edition" has value 7
//   Author: "Flanagan",  // The property "author" has value "Falangan"
//   contents: {},
// };                    // The curly brace marks the end of the object

// Access the properties of an object with.or[]:

// let book = {
//   topic: "Javascript",
//   edition: 7,
//   Author: "Flanagan",
//   contents: {},
// };
// console.log(book.topic); // the output is "javascript"

// let book = {
//   topic: "Javascript",
//   edition: 7,
// };
// // console.log(book["edition"]); // another way to access property values
// let book = {
//   topic: "Javscript",
//   eidition: 7,
// };
// console.log((book.author = "Falangan")); // create new properties by assignment.
// console.log((book.contents = {})); // {} is a empty object with no element

//Conditionally access properties with ?.

// let book = {
//   topic: "Javascript",
//   edition: 7,
//   Author: "Flanagan",
//   contents: {},
// };
// console.log(book.contents?.ch01?.sect1); // Undefined:book.contents has no cho1 property

// Javascript also supports arrays(numerically indexed lists)of values:

let primes = [2, 3, 5, 7]; // An array of 4 vlaues ,delimited with [and].
// console.log(primes[0]); //the first element (index 0) of the array.
// console.log(primes.length); // how many elements in the array .
// console.log(primes.length - 1); // the last elements in the array
primes[4] = 9; // add a new element by assignment
primes[4] = 11; // Or alter an existing element by assignment
// console.log(primes);

// let empty = []; // []  is an arry with no element
// console.log(empty.length); //=>0

// //  Arrays and objects can hold other arrays and object
// let points = [
//   // An array with 2 elements .
//   { x: 0, y: 0 }, //Each element is an object.
//   { x: 1, y: 1 },
// ];
// let data = {
//   //An object with 2 properties
//   trial1: [
//     // the value of each property is an array.
//     [1, 2],
//     [3, 4],
//   ],
//   trial2: [
//     // the elements of the arrays are arrays
//     [2, 3],
//     [4, 5],
//   ],
// };

// Operator act on values (the operands) to produce a new value.
// Arithmetic operators are some of the simplest:
// let x;
// x=3+2;
// console.log(3 + 2); //=>5:  addition.
// console.log(3-2); //=>1: subtraction
// // console.log(3 * 2); // =>6: multiplication
// console.log(3 / 2);   //=>1.5: division
// let points = [
//   { x: 0, y: 0 },
//   { x: 1, y: 1 },
// ];
// console.log(points[1].x - points[0].x); //=>1:    more complicatted operands also work
// console.log("3" + "2");  //=>"32": +add numbers,concatenates string

// Javascript defines some shorthand arithmetic operators

// let count = 0; // Define a variable
// count++; //increment the variable
// console.log(count++); //=>1 its increment 0 to 1
// count--; //Decrement the variable
// console.log(count--); //=>its decrement 0 to -1

// count += 2; // Add 2: same as count=count +2
// console.log(count); // =>2:

// count *= 3;
// // console.log(count); //=>6: variable names are expression,too.

// // Equality and relational operators test whether two values are equal,
// // unequal,less than ,greater than,and so on .They evaluate to true or false.

// let x = 2,
//   y = 3; // These = signs are assignment,not equality tests
// console.log(x === y); //=>false:equality
// console.log(x !== y); //=>true:inequality
// console.log(x < y); //=>true:less-than
// console.log(x <= y); //=>true:less-than or equal
// console.log(x > y); //=>false:greater-than
// console.log(x >= y); //=>false:greater-than or equal
// console.log("two" === "three"); //=>false:the two string are different
// console.log("two" > "three"); //=>true :"tw" is alphabetically greater than "th"
// console.log(false === x > y); //=>true:false is equal to false

// //logical operators combine or invert boolean values
// console.log(x === 2 && y === 3); //=> true :both comparision are true .&& is AND
// console.log(x > 3 || y < 3); //=>false:neither comparision is true .//is OR
// console.log(!(x === y)); //=>true:! inverts a boolean value

// // Functions are parameterized blocks of JavaScript code that we can invoke
// let x = 2,
//   y = 3;
// function plus1(x) {
//   // Define a function named "Plus1" with parameter of "x"
//   return x + 1; //Return a value one larger than the value passed in
// } // Functions are enclosed in curly braces
// plus1(y); // =>y is 3,so this invocation returns 3+1
// // console.log(plus1(y));
// let square = function (x) {
//   //Functions are values and can be assigned to vars
//   return x * x; //compute the function's value
// };
// // //Semicolon marks the end of the assignment.
// square(plus1(y)); // =>16:invoke two functions in one expression
// // // console.log(square(plus1(y)));

// // shorthand syntex for defining function

// const plus1 = (x) => x + 1; // the input x maps to the output x+1
// const square = (x) => x * x; //the input x maps to the output x*x

// plus1(y); //=>function inovocation is the same
// square(plus1(y)); //=>16;
// // console.log(plus1(y));
// console.log(square(plus1(y)));

//When functions are assigned to the properties of an object ,we call them "methods."
// All javaScript objects (including arrays )have methods

let a = []; // create an empty array
a.push(1, 2, 3, 4, 5); // The push() method adds elements to an array
a.reverse(); //Another method :reverse the order of elements
// console.log(a);

// We can define our own methods, too.The "This " keyword refers to the object
// On which the method is defined:in this case,the points array from earlier

let points = [
  { x: 0, y: 0 },
  { x: 1, y: 1 },
];
points.dist = function () {
  // Define a methode to compute the absolute value
  let p1 = this[0]; //First element of array we're invoked on
  let p2 = this[1]; //Second element of "this"object
  // let a = p2.x - p1.x; //difference in x cordinets
  // let b = p2.y - p1.y; //difference in y cordinates
  // return Math.sqrt(a * a + b * b); // The Pythagorean theorem
};
// points.dist();
// console.log(points.dist()); //=>Math.sqrt(2): distance between our 2 points

//Javascript statements include conditionals and loops using the syntex
//of C,C++,Java ,and other language

function abs(x) {
  //A function to compute the absolute value
  if (x >= 0) {
    // The comparision is true
    return x;
  } else {
    return -x; // The comparison is false
  }
}
abs(-10);
abs(10);
// console.log(abs(-10) === abs(10)); //=> true

// Compute the sum of the elements of an array

function sum(array) {
  let sum = 0; //Start with initial sum of 0.
  for (let x of array) {
    // Loop over array ,assigning each element to x
    sum += x; //Add the element value to the sum
  } //This is the end of the sum
  return sum; //Return the sum
}
sum(primes);
// console.log(sum(primes)); //=>sum of the first 5 primes 2+3+5+7+11

// A function to compute factorials

function factorial(n) {
  let product = 1; //Start with a product of 1.
  while (n > 1) {
    // Repeat statements in{} while expression ()is true.
    product *= n; //Shortcut of product=product*n;
    n--; //shortcut for n=n-1
  } //End the loop
  return product; //Return the product
}
factorial(4); //=>24:1*4*3*2
// console.log(factorial(4));

// For loop using to find factorial number

function factorial2(n) {
  let product = 1;
  for (let i = 2; i <= n; i++) product *= i;

  return product;
}
// console.log(factorial2(5));

//Classical object oriented programming

class Point {
  //By convention ,class names are capitalized
  constructor(x, y) {
    //Constructor function to initialize a new instances.
    this.x = x; //This Keyword is the new object being initialized
    this.y = y; //Store function arguments as object properties
  }
  distance() {
    //Method to compute distance from origin to point
    return Math.sqrt(this.x * this.x + this.y * this.y); //Return the squre root of x^2+y^2.
  }
}
// Use the Point() constructor function with "New" to create Point objects
let p = new Point(1, 1); //The geometric point(1,1)

// Now use a methode of the point object p
console.log(p.distance(1, 1)); //=1.414 or Math.sqrt(2)
