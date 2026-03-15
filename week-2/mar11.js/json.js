// JSON methods, toJSON
// lets say we have a complex object, and we'd like to convert it inot a strign , to send it over a network or to output 
// for logging purposes
// let user = {
//     name: 'john',
//     age: 30,

// toString(){
//     return `{name: '${this.name}' , age: ${this.age}}`;
// }

// };
// console.log(user)
// let user = {
//   name: "John",
//   age: 30,

//   toString() {
//     return `{name: "${this.name}", age: ${this.age}}`;
//   }
// };

// console.log(user) // {name: "John", age: 30}

// json.stringify
// let student = {
//   name: 'John',
//   age: 30,
//   isAdmin: false,
//   courses: ['html', 'css', 'js'],
//   spouse: null
// };

// let ans = JSON.stringify(student)
// console.log(typeof ans);
// console.log(ans)

// JSON.stringify can be applied to primitives as well.

// JSON supports following data types:

// Objects { ... }
// Arrays [ ... ]
// Primitives:
// strings,
// numbers,
// boolean values true/false,
// null.

// console.log(JSON.stringify(1))
// console.log(JSON.stringify('test'))
// console.log(JSON.stringify(true))
// console.log(JSON.stringify([1,2,3]))

// nested objects are supported and converted automatically 

// let meetup = {
//   title: "Conference",
//   room: {
//     number: 23,
//     participants: ["john", "ann"]
//   }
// };

// console.log(JSON.stringify(meetup))

// excluding and transforming: replacer 

let ans = JSON.stringify(value [ replacer,space])