// Date and time 
// lets meet a new built in object: Date . 
// creation 
// let now = new Date();
// console.log(now)
// let df = new Date(0);
// console.log(df)

// let df = new Date(24*3600*1000)
// console.log(df)

// let df = new Date()
// console.log(df.getFullYear())
// console.log(df.getMonth())
// console.log(df.getDate())
// console.log(df.getDay())
// console.log(df.getTime())
// console.log(df.getTime())
// day5-date-time.js
// Examples from https://javascript.info/date

console.log("=== CREATING DATES ===\n");

// Current date and time
let now = new Date();
console.log(now); // Current date/time

// Jan 01 1970
let Jan01_1970 = new Date(0);
console.log(Jan01_1970);

// Jan 02 1970
let Jan02_1970 = new Date(24 * 3600 * 1000);
console.log(Jan02_1970);

// Date from string
let date1 = new Date("2017-01-26");
console.log(date1);

// new Date(year, month, date, hours, minutes, seconds, ms)
let date2 = new Date(2011, 0, 1, 0, 0, 0, 0); // 1 Jan 2011, 00:00:00
console.log(date2);

let date3 = new Date(2011, 0, 1); // Just date, time will be midnight
console.log(date3);

console.log("\n=== ACCESSING DATE COMPONENTS ===\n");

let date = new Date();

// Get year (4 digits)
console.log(date.getFullYear()); // 2025

// Get month (0-11)
console.log(date.getMonth()); // 2 (March, 0-indexed!)

// Get day of month (1-31)
console.log(date.getDate()); // 11

// Get hours, minutes, seconds, milliseconds
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());

// Get day of week (0-6, Sunday is 0)
console.log(date.getDay()); // 2 (Tuesday)

// Get timestamp
console.log(date.getTime()); // milliseconds since Jan 1, 1970

console.log("\n=== SETTING DATE COMPONENTS ===\n");

let today = new Date();

today.setHours(0);
console.log(today); // still today, but hour changed to 0

today.setHours(0, 0, 0, 0);
console.log(today); // still today, now 00:00:00 sharp

console.log("\n=== AUTOCORRECTION ===\n");

let date4 = new Date(2013, 0, 32); // 32 Jan 2013? Auto-corrects!
console.log(date4); // 1 Feb 2013

let date5 = new Date(2016, 1, 28);
date5.setDate(date5.getDate() + 2);
console.log(date5); // 1 Mar 2016

console.log("\n=== DATE TO NUMBER, DATE DIFF ===\n");

let date6 = new Date();
console.log(+date6); // Converts to timestamp

let start = new Date();
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}
let end = new Date();
console.log(`The loop took ${end - start} ms`);

console.log("\n=== DATE.NOW() ===\n");

let start2 = Date.now(); // Milliseconds from Jan 1, 1970
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}
let end2 = Date.now();
console.log(`The loop took ${end2 - start2} ms`);

console.log("\n=== DATE.PARSE ===\n");

let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
console.log(ms); // Timestamp

let date7 = new Date(Date.parse('2012-01-26T13:51:50.417-07:00'));
console.log(date7);

// TYPE ALL OTHER EXAMPLES FROM CHAPTER