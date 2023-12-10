//Big int literals
// Big int literals are written as a string of digits followed by a lowercase letter n.

// A not-so-big BigInt literal
console.log(1234n); //=>1234n.
//A binary BigInt
console.log(0b111111n); //=>63n.
//An octal BigInt
console.log(0o7777n); //=>4095n.

// A 64 bit integer
console.log(0x80000000000000000n); //=>154742504910672534362390528n

//You can use Bigint() as a function for converting
//  regular JavaScript numbers or Strings to BigInt values
let x = BigInt(100);
console.log(x); //=>100n
let y = BigInt(Number.MAX_SAFE_INTEGER);
console.log(y); //=>9007199254740991n

//String to BigInt
let string = "1" + "0".repeat(10); //=>10000000000:1 followed by 10 zero.
console.log(string);

// Arithmatic with BigInt values works like arithmetic with regular JavaScript number
let z = 3000n;
let p = 997n;
console.log(z + p); //=>3997n:
console.log(z % p); //=>9n:
console.log(z / p); //=>3n.

//Comparison operator
//Diffrerence between == and ===

const num = 0;
const big = 0n;
const str = "0";
const obj = new String("0");

console.log(num == str); // true
console.log(big == num); // true
console.log(str == big); // true

console.log(num == obj); // true
console.log(big == obj); // true
console.log(str == obj); // true

console.log(1 < 2n); //true
console.log(2 > 1n); //true
console.log(0 === 0n);
console.log(0 == 0n);
