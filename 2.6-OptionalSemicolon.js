let a;
a = 3;
console.log(a);
a = 5;
b = 10;
console.log(b);

let y = x + f(a + b).toString();
let x = 0; //Semicolon omitted here
[x, x + 1, x + 2].forEach(consol.log); //Defensive;keeps this stament separate

// Because Javascript always interprets that line breake as semiclon
// Example
return;
true; //I dont want in this situation
// Actual formate is:
return true;
// Return ,Break or contineue should not use insert a line
