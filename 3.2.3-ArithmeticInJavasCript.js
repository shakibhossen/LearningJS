Math.pow(2, 3);
console.log(Math.pow(2, 3)); //=>8: 2 to the power 3

Math.round(0.6);

// console.log(Math.round(0.6));//=>1   Round to the nearest integer

// Round up to an integer
Math.ceil(0.6);
console.log(Math.ceil(0.1)); //=>1.

// (Math.floor()is used for round down to an integer)

Math.floor(0.6);
console.log(Math.floor(0.6));

// (Math.abs()is used for print absolute value
console.log(Math.abs(-10));

// [Math.max(x,y,z) is used for return the largest argument]
console.log(Math.max(2, 3, 4));

// [Math.min(x,y,z)is used for return the smallest argument]
console.log(Math.min(10, 20, 30));

//[Math.random() is used for pseudo-random number such x where 0<=x<1.0]
console.log(Math.random(0, 1.0));

console.log(Math.pow(3, 1 / 3));
console.log(Math.round(0.6));
console.log(Math.sign(180));
console.log(Math.log(10));
console.log(Math.cbrt(3));
console.log(Math.log2(100));
// Square root of sum of squares of all arguments
console.log(Math.hypot(3, 4));

//In JavaScript, log1p() is a function that is used to return the natural logarithm of a number plus 1 which
//  is loge(number+1).
// Because the log1p() function is a static function of the Math object,
// it must be invoked through the placeholder object called Math.

//Math.log1p(number)
// Number value must be greater than -1
console.log(Math.log1p(0));

// If the number is -1, the log1p() function will return -Infinity.
// If the number is less than -1, the log1p() function will return NaN
console.log(Math.log1p(-2.5));

// Math.exp(x)-1,the inverse of Math.log1p()
console.log(Math.expm1(1));

//The Math.sign() static method returns 1 or -1,
// indicating the sign of the number passed as argument.
//  If the input is 0 or -0, it will be returned as-is.
// // If x is positive, returns 1.
// If x is negative, returns -1.
// If x is positive zero, returns 0.
// If x is negative zero, returns -0.
// Otherwise, returns NaN.

console.log(Math.sign(-10));
console.log(Math.sign(5));
console.log(Math.sign(-100));

//Math.imul() is used for optimaized multiplication of 32-bit integers
console.log(Math.imul(3, 2));

// The Math. clz32() method returns the number of leading zeros in a 32-bit binary number.
//  clz32 is short for CountLeadingZeroes32.
console.log(Math.clz32(0xf));

// Math.trunc(3.9)is used for convert to an integer by trancating fractional part
console.log(Math.trunc(3.9));

// Math.fround(doubleFloat)
// The Math.fround() static method returns the nearest 32-bit single precision float
//  representation of a number.

console.log(Math.fround(1.377777));

// Divison by zero is not an error in Javascript
//It returns Infinity or negative infinity

console.log(1 / 0);
console.log(-10 / 0);
// NAN is not -a-number
console.log(0 / 0);

console.log(Math.sqrt(-1));
console.log(-1 / Infinity);
console.log(1 / Infinity);
console.log(Number.MAX_VALUE * 2);

console.log(Number.NaN);

//Underflow occurs when the result of numeric operation is closer to zero
// than the smallest representable  number
console.log(Number.MIN_VALUE / 2); //Underflow
console.log(-Number.MIN_VALUE / 2); //Negative 0
console.log(Number.MIN_SAFE_INTEGER); //-(2^53-1)
console.log(Number.MAX_SAFE_INTEGER); //(2^53-1)

// Number. EPSILON is the difference between 1 and the next greater number
// representable in the Number format, because double precision floating point
// format only has 52 bits to represent the mantissa, and the lowest bit has a significance of 2-52.Aug 21, 2023

console.log(Number.EPSILON);
console.log("rafidul is joss");
