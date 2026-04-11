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

// console.log(this)   // globalObject - window,global
// function x(){
// console.log(this)
// }
// x();
// this substitution
// if the value is undefined of null 
// this keyword will be replace with globalObject only in non strict mode. 

// const student = {
//     name: 'ayush',
//     printName: function(){
//         console.log(this.name)
//     }
// }
// // student.printName()

// const student2 = {
//     name:'Deepika'
// }

// student.printName.call(student2) 

// let name = {
//     firstname: 'ayush',
//     lastname:  'singh',
//     printFullName: function(hometown){
//         console.log(this.firstname+' '+this.lastname + 'from ' + hometown);
//     }
// }
// // name.printFullName()

// let name1 = {
//     firstname: 'vid',
//     lastname:  '',
//     printFullName: function(){
//         console.log(this.firstname+' '+this.lastname);
//     }
// }

// name.printFullName.call(name1)
// the only diffrence between call and apply method is how we pass argument
// name.printFullName.apply(name1,['indore'])
// bind method 
// let printMyName = name.printFullName.bind(name1,'indore','jabalpur')
// console.log(printMyName);
// printMyName()

// how does arrow function behave with 'this' keyword. arrow function does not have its own
// they take the value of there lexical envioronment where they are enclosed 
// const obj = {
//     a:10,
//     x:()=>{
//         console.log(this)
//     },
// }
// obj.x();

//------------------------------------------------ Experiments --------------------------------------------------
// Exp -1 
// const dog = {
//   name: "Bruno",
//   bark() { console.log(this.name + " says Woof!"); }
// };
// dog.bark(); // Rule ? → this = ? // implicit 


// Exp -2 
// const dog = {
//   name: "Bruno",
//   bark() { console.log(this.name + " says Woof!"); }
// };
// const barkFn = dog.bark;
// barkFn(); // Rule ? → this = ?
// WHY did it change? What's to the left of the dot now?
// i didn't understood what this ques is asking help me

// const dog = {
//   name: "Bruno",
//   bark() { console.log(this.name + " says Woof!"); }
// };
// const boundBark = dog.bark.bind(dog);
// boundBark(); // Rule ? → this = ?
// // bind() permanently attaches 'this' to dog

// Ex-4
// const button = {
//   label: "Submit",
//   handleClick() {
//     console.log("Clicked: " + this.label);
//   }
// };

// // Simulating passing method as a callback (like onClick)
// setTimeout(button.handleClick, 100); // What prints? WHY? 
// // ans - it will print handleclick function but not call handleclick function 

// // Fix 1: bind
// setTimeout(button.handleClick.bind(button), 100);
// // this print 'clicked submit'

// // Fix 2: arrow wrapper
// setTimeout(() => button.handleClick(), 100);
// // arrow function do not have there own this
// //  so they will point to globalObject which i guess is not object. it is browser so it will be undefined.

// const calculator = {
//   value: 0,
//   add(a, b) {
//     this.value = a + b;
//     return this.value;
//   }
// };

// const sciCalc = { value: 0 };

// // Borrow calculator's add method for sciCalc:
// console.log(calculator.add.call(sciCalc, 10, 20)); // my ans 30
// console.log(sciCalc.value); //my ans 0
// console.log(calculator.value); // ? — did it change? no it will not change 

// function Car(make, model) {
//   console.log("this before:", this); // What is it ? my ans : this 'this' is refers to its global object window ? no. it  is its function car.
//   this.make = make;
//   this.model = model;
//   this.describe = function() {
//     console.log(this.make + " " + this.model);
//   };
//   console.log("this after:", this); // What is it now? now here i am confused and nervous. what is this describe thing like without any parameter we have created this. 
//   // yet i think it will print car function.
// }

// const car1 = new Car("Toyota", "Camry");
// car1.describe(); // it will print toyota camry

// const car2 = Car("Honda", "Civic"); // No 'new'! What happens?
// console.log(car2); // i don't know 
// console.log(global.make); // ? (in Node) — did it pollute global? this is also i don't know 

// const person = {
//   name: "Ayush",
//   hobbies: ["coding", "reading", "gaming"],

//   // Method 1: Regular function inside forEach
//   showHobbiesRegular() {
//     this.hobbies.forEach(function(hobby) {
//       console.log(this.name + " likes " + hobby); // Ayush
//     });
//   },

//   // Method 2: Arrow function inside forEach
//   showHobbiesArrow() {
//     this.hobbies.forEach((hobby) => {
//       console.log(this.name + " likes " + hobby); // Ayush because here i think that arrow function acts as a wrapper where as real function 
//       // showHobbiesArrow
//     });
//   }
// };

// person.showHobbiesRegular(); // What prints?  // both will give same result.
// person.showHobbiesArrow();   // What prints?

// const person = {
//   name: "Ayush",
//   // Arrow function as a method — BAD!
//   greet: () => {
//     console.log("Hi, I'm " + this.name);
//   }
// };
// person.greet();
//  // What prints? WHY is this.name wrong?
//  // ans 1: it will print 'hi, i'm undefined' because arrow function do not have there own 'this'
// // Arrow functions don't get their own 'this' — they inherit from
// // the SURROUNDING SCOPE where the object was created.
// // The object literal {} is NOT a scope! So 'this' = global/module.

// function identify() {
//   console.log("I am " + this.name);
// }

// const obj1 = { name: "Object1", identify };
// const obj2 = { name: "Object2" };

// identify();                    // Line A: Rule default binding → this = indentify()
// obj1.identify();               // Line B: Rule implicit  → this = obj1
// identify.call(obj2);           // Line C: Rule explicit → this = obj2
// new identify();                // Line D: Rule new  → this = new empty object
// const bound = identify.bind(obj1);
// bound();                       // Line E: Rule explicit  → this = obj1
// bound.call(obj2);              // Line F: Rule explicit → this = error or obj1 only (tricky!) 