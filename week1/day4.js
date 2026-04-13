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

let user = {
    name: 'john',
    surname: 'smith',
    set FullName(value){
        [this.name,this.surname] = value.split(' ')
    },
   
}