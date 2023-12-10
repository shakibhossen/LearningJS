// To create a new Date object call new Date() with one of the following arguments:
// new Date()
// // new Date(year, month, date, hours, minutes, seconds, ms)
// Create the date with the given components in the local time zone. Only the first two arguments are obligatory.

// The year should have 4 digits. For compatibility,
//  2 digits are also accepted and considered 19xx, e.g.
// 98 is the same as 1998 here,
//  but always using 4 digits is strongly encouraged.
// The month count starts with 0 (Jan), up to 11 (Dec).
// The date parameter is actually the day of month, if absent then 1 is assumed.
// If hours/minutes/seconds/ms is absent, they are assumed to be equal 0.

let now = new Date("10 December,2023 22:11:30:100");
let day = now.getDate();
console.log(day);

// Access date components
// There are methods to access the year, month and so on from the Date object:

// getFullYear()
// Get the year (4 digits)
// getMonth()
// Get the month, from 0 to 11.
// getDate()
// Get the day of month, from 1 to 31, the name of the method does look a little bit strange.
// getHours(), getMinutes(), getSeconds(), getMilliseconds()
console.log(now.getMonth()); //=>(11 for December month )to access which month
console.log(now.getHours()); //=> 22 hours
console.log(now.getMinutes()); //=>1702224690000 miliseconds
console.log(now.getSeconds()); //=>30 second
console.log(now.getMilliseconds()); //=>100 mili second
