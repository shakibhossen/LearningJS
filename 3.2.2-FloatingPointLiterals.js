//Floating-Point literals are positive or non positive number
//More succinctly the syntex is:[digits][.digits][(E|e)[(+|-)]digits]

1.4738444e-32;
// console.log(1.4738444e-32); //=>1.4738444*10^-32
6.02e23;
// console.log(6.02e23); //=>6.02*10^23.

// Separetors in Numeric Literals is Underscores

let billion = 1_000_000_000; //Underscore as a thousand separator
// console.log(billion);
let bytes = 0x89_ab_cd_ef; //As a bytes separetor
// console.log(bytes);
let bits = 0b0001_1101_0111; //As a nibble(half of bytes =4bits) separetor
// console.log(bits);
