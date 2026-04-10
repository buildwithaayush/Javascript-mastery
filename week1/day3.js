// 'use strict'
// 'This' method 

// Rule:1 Default binding 
// function showThis() {
//   console.log(this); // In Node: global object. In strict mode: undefined
// }
// showThis(); // Plain call — no object, no bind, no new
// 'this' falls through to the default: global (or undefined in strict mode)

// Rule:2 Implicit binding 

// const player = {
//     name: "Ayush",
//     greet(){
//         console.log(this.name)
//     }
// }

// // player.greet()

// const greetFn = player
// greetFn.greet();


// rule 3 Explicit binding 
// function greet(greeting) {
//   console.log(greeting + ", " + this.name);
// }

// const ayush = { name: "Ayush" };
// const raj = { name: "Raj" };
// const thomas = {name: 'thomas'}

// greet.call(ayush, "Hello");   // "Hello, Ayush" — this = ayush
// greet.call(raj, "Hey");       // "Hey, Raj" — this = raj
// greet.apply(ayush, ["Hi"]);   // "Hi, Ayush" — apply takes args as array

// const boundGreet = greet.bind(ayush); // Returns a NEW function
// boundGreet("Namaste");  // "Namaste, Ayush" — permanently bound

// // call vs apply vs bind:
// // call → invoke NOW, args one by one
// // apply → invoke NOW, args as array
// // bind → DON'T invoke, return new function with fixed 'this'

// const newgreet = greet.bind(thomas);
// newgreet('bleakwinters')

// rule 4 new Binding - Constructor call 
// function Player(name, score){
//     this.name = name;
//     this.score = score;
// }

// const p1 =  new Player('ayush',90);
// console.log(p1)

// const ayush = {name:'ayush'}
// function sayHi(){
//     console.log(this.name + ' welcome')
// }
// sayHi.call(ayush)


// function Player(name, score) {
//   // 'new' creates an empty object and sets this = that object
//   this.name = name;    // adds 'name' property to the new object
//   this.score = score;  // adds 'score' property to the new object
//   // implicitly returns 'this' (the new object)
// }

// const p1 = new Player("Ayush", 100);
// console.log(p1.name);  // "Ayush"
// console.log(p1.score); // 100

// // Without 'new':
// const p2 = Player("Raj", 50); // this = global! Pollutes global scope!
// console.log(p2); // undefined — regular functions return undefined by default

console.log(this)   