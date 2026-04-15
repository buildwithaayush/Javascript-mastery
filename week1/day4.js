// prototypes and inheritance
// const animal = {
//     isAlive: true,
//     breathe() { console.log("Breathing..."); }
//   };
  
//   const dog = Object.create(animal); // dog's prototype IS animal
//   dog.name = "Bruno";
//   dog.bark = function() { console.log(this.name + " barks!"); };
  
//   console.log(dog.name);     // "Bruno" — found on dog itself
//   console.log(dog.isAlive);  // true — NOT on dog, found on animal (prototype)
//   dog.breathe();             // "Breathing..." — found on animal (prototype)
//   dog.bark();                // "Bruno barks!" — found on dog itself
  
//   // The chain: dog → animal → Object.prototype → null

// we have created a prototype of animal object where it inherrit the methods and variable from its parents animal.
//   const dog = Object.create(animal);
//   dog.name = 'pillu'
//   dog.bark = function (){
//     console.log(this.name + ' is barking...')
//   }
//   console.log(dog.isAlive) // inheritted from animal object.
//   dog.breathe()
//   dog.bark()
//   For instance, we have a user object with its properties and 
// methods, and want to make admin and guest as slightly modified
//  variants of it. We’d like to reuse what we have in user, not 
// copy/reimplement its methods , just build a new object on top of it.

// when we read a property from  object, and its missing javascript automatically 
// takes it from the prototype . in programming , this is called prototypal inheritance

// let animal = {
//     eats: true,
//     walk(){
        
//     }
// };

// let rabbit = {
//     jumps:true,
//     __proto__:animal
// }


// rabbit.walk = function(){
//     console.log('rabbit! Bounce=bounce');
// }

// rabbit.walk();

// let user = {
//     name: 'john',
//     surname: 'smith',
//     set FullName(value){
//         [this.name,this.surname] = value.split(' ')
//     },
   
// }

// const animal = {
//     isAlive: 'true',
//     walk(){
       
//     }
// }

// let rabbit = Object.create(animal)
// rabbit.walk()
// rabbit.eats = 'grass';
// console.log(rabbit.eats)
// console.log(rabbit.isAlive)
// rabbit.walk = function(){
//     console.log('rabbit is running')
// }
// rabbit.walk()


// function Dog(name,breed){
//     this.name = name;
//     this.breed = breed;
// }

// // Methods go on the Prototype 0 shared by all instances 
// Dog.prototype.bark = function(){
//     console.log(this.name + ' is now barking louder !!!!!');
// }

// Dog.prototype.describe = function(){
//     console.log(this.name + ' is a  '+ this.breed);
// }

// const d1 = new Dog('alex','Labrador')
// const d2 = new Dog('rocky','pitbull')

// d1.bark()
// d2.describe()

// let animal = {
//     eats:true,
//     food(){
//         console.log(this.name + ' eats grass')
//     }
// }
// function Rabbit(name){
//     this.name = name;
// }
// Rabbit.prototype = animal;

// let rabbit = new Rabbit('kaalu rabbit');
// console.log(rabbit.eats)
// rabbit.food()

// Default F.prototype, constructor property
// the default 'prototype' is an object with the only property constructor that points back to the 
// function itself. 

function Rabbit(){}
/*
default
*/
let rabbit = new Rabbit();

// function Dog(name, breed) {
//   this.name = name;     // Own property — each instance gets its own
//   this.breed = breed;   // Own property
// }

// // Methods go on the PROTOTYPE — shared by all instances
// Dog.prototype.bark = function() {
//   console.log(this.name + " says Woof!");  // 'this' = the instance (Rule 2)
// };

// Dog.prototype.describe = function() {
//   console.log(this.name + " is a " + this.breed);
// };

// const d1 = new Dog("Bruno", "Labrador");
// const d2 = new Dog("Rocky", "German Shepherd");

// d1.bark(); // "Bruno says Woof!" — method found on Dog.prototype
// d2.bark(); // "Rocky says Woof!" — SAME function, different 'this'

// // Both share the SAME bark function:
// console.log(d1.bark === d2.bark); // true! Memory efficient.

// // The chain: d1 → Dog.prototype → Object.prototype → null
/*

class Dog{
    constructor(name,breed){
        this.name = name;
        this.breed = breed;
    }

    bark(){  // Goes on Dog.prototype automatically
        console.log(this.name + 'says woof!')
    }

    describe(){
        console.log(this.name +  ' is a ' + this.breed)
    }

}*/
// Inheritance with extends

// g.bark();
// g.guide();
// g.describe();



// class User {
//     constructor(name){
//         this.name = name;
//     }
//     sayHi(){
//         console.log('welcome ' + this.name)
//     }
// }

// let ayush = new User('Ayush');
// ayush.sayHi()
// console.log(typeof User)

// what is a class ?
// In javascript class is a type of function.

// class User {
//     constructor(name){
//         this.name = name
//     }
// }

// console.log(typeof User)// class is a function 

// alert(User === User.prototype.constructor);

// var twoSum = function(numbers, target) {
    
// };

// const a = { x: 1 };
// const b = Object.create(a);
// b.y = 2;
// const c = Object.create(b);
// c.z = 3;

// console.log(c.z); // 3 - found in c
// console.log(c.y); // 2 — found in b because of prototype
// console.log(c.x); // 1 — found in a because of prototype
// console.log(c.w); // undefined — not found anywhere. What happens? because object c does not have w property neither and prototype 
// // have so it will reach to null while checking one after other prototype.


// function Cat(name) 
// { this.name = name; }
// Cat.prototype.sound = "Meow";

// const cat = new Cat("Whiskers");
// console.log(cat.name);    // whiskers — own or prototype? - own
// console.log(cat.sound);   // Meow — own or prototype? - its prototype and i guess it cant't be changed ?
// console.log(cat.hasOwnProperty("name"));  // ? i don't know what hasOwnProperty is used for
// console.log(cat.hasOwnProperty("sound")); // ?
// // WHERE did hasOwnProperty come from? (hint: Object.prototype)

// const parent = { greeting: "Hello from parent" };
// const child = Object.create(parent);

// console.log(child.greeting); // ? — from parent - 'hello from parent'

// child.greeting = "Hello from child"; // creates OWN property
// console.log(child.greeting); // ? — from child (shadows parent) - 'hello from child'

// delete child.greeting; // removes OWN property
// console.log(child.greeting); // ? — parent's version is back! 'hello from parent'

// function Robot(name) { this.name = name; }
// Robot.prototype.greet = function() { return "I am " + this.name; };

// const r1 = new Robot("Alpha");
// const r2 = new Robot("Beta");

// console.log(r1.greet === r2.greet); // ? — same function? - true they are pointing to same function in prototype.
// console.log(r1.__proto__ === Robot.prototype); // true because r1.__proto__ == robot only but i have doubt do robot and robot.prototype are same ? 
// console.log(r1.__proto__ === r2.__proto__); // false because r1.__proto__ is robot where as r2.__proto__ is r1. 

// class Animal {
//   constructor(name) { this.name = name; }
//   speak() { return this.name + " makes a sound"; }
// }

// class Dog extends Animal {
//   bark() { return this.name + " barks"; }
// }

// const d = new Dog("Bruno");
// console.log(d.bark());   // ? Bruno barks
// console.log(d.speak()); // ? — where is speak() found? bruno makes a sound.  speak is found in animal class but by using extends 
// // dog class can access properties and function of animal class.

// // Verify the chain:
// console.log(d.__proto__ === Dog.prototype);                    // it is true because d is created by using new Dog() hence d is proto of dog class 
// console.log(d.__proto__.__proto__ === Animal.prototype);       // true. because of same above logic 
// console.log(d.__proto__.__proto__.__proto__ === Object.prototype); // true class is little bit syntactical sugar of prototypal inheeritance . 
// console.log(d.__proto__.__proto__.__proto__.__proto__); // null 

// const vehicle = {
//   speed: 0,
//   accelerate(amount) {
//     this.speed += amount;
//     console.log(this.type + " going " + this.speed + "mph");
//   }
// };

// const car = Object.create(vehicle);
// car.type = "Car";

// const bike = Object.create(vehicle);
// bike.type = "Bike";

// car.accelerate(60);   // ? — what's this.type? what's this.speed? car and 60
// bike.accelerate(15);  // ? — different this! bike and 15
// car.accelerate(20);   // ? — does car.speed remember? no this is a new instance of car object where speed is 20
// // Key: the method is on vehicle, but 'this' is the caller (car or bike)

// function User(name) { this.name = name; }
// User.prototype.role = "user";

// const u1 = new User("Ayush");
// const u2 = new User("Raj");

// console.log(u1.role); // "user"
// console.log(u2.role); // "user"

// User.prototype.role = "admin"; // Change the prototype!

// console.log(u1.role); // ? — did it change? yes admin
// console.log(u2.role); // ? — did it change? yes admin
// // WHY? Because u1 and u2 don't OWN 'role' — they read it from the prototype

class Animal {}
class Dog extends Animal {}
class GuideDog extends Dog {}

const g = new GuideDog();

console.log(g instanceof GuideDog); // true
console.log(g instanceof Dog);      // true
console.log(g instanceof Animal);   // true
console.log(g instanceof Object);   // true
// instanceof walks up the __proto__ chain to find the constructor's prototype