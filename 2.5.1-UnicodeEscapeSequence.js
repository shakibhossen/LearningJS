//  A unicode escape sequence is a backslash followed
//  by the letter 'u' followed by four hexadecimal digits (0-9a-fA-F).
// It matches a character in the target sequence with the value specified by the four digits.
//  For example, ”\u0041“ matches the target sequence ”A“ when the ASCII character encoding is used.

let café = 1; // '\u00e9'= for unicode character
// console.log(café);
console.log("\u{1F600}"); //\u{1F600}=Print a smilly face
