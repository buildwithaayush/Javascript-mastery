

// function getName(){
//     console.log('get middle name')
//     getMName()
// }

// function getMName(){
//     console.log('get last Name')
//     getLName()
// }

// function getLName(){
//     console.log('reached the bottom of stack')
// }
// getName();
// console.log(a);  // What prints? Why?
// var a = 10;
// console.log(a);  // What prints now?
// console.log(b);  // What happens? Why is it different from var?
// let b = 20;
// if (true) {
//   var x = 1;
//   let y = 2;
//   const z = 3;
// }
// console.log(x);  // ?
// console.log(y);  // ?
// console.log(z);  // ?
// greet();    // Does this work? Why?
// hello();    // Does this work? Why?

// function greet() { console.log("Hi!"); }
// var hello = function() { console.log("Hello!"); };
// Run both. Why are the outputs different?
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log("var:", i), 100);
// }

// for (let j = 0; j < 3; j++) {
//   setTimeout(() => console.log("let:", j), 100);
// }
// const person = { name: "Ayush" };
// person.name = "Changed";   // Does this work? Why?
// console.log(person.name);

// person = { name: "New" };  // Does this work? Why?
// function a() { console.log("a start"); b(); console.log("a end"); }
// function b() { console.log("b start"); c(); console.log("b end"); }
// function c() { console.log("c"); }
// a();
// What's the EXACT order? Draw the call stack at each step.
// function infinite() { infinite(); }
// infinite();
// What happens? WHY does it happen? What error message do you see?