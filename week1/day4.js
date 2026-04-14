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

}

// Inheritance with extends
class GuideDog extends Dog{
    constructor(name,breed,owner){
        super(name,breed);
        this.owner = owner;
    }

    guide(){
        console.log(this.name + ' guides ' + this.owner);
    }

}

const g = new GuideDog('buddy','Golden Retriever','Ayush');
// g.bark();
// g.guide();
// g.describe();

class MyClass {
    constructor(){}
    method1(){}
    method2(){} 
}

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

class User {
    constructor(name){
        this.name = name
    }
}

console.log(typeof User)// class is a function 

alert(User === User.prototype.constructor);

