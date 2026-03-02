// let user = {
//     name:'ayush',
//     age:22,
//     'multiword': true,
// }
// user.isAdmin = true;

// console.log(user)
// delete user.age;
// console.log(user)

// let key = 'like birds';
// user[key] = true;

// let user = {
//     name:'ayush',
//     age:30,
//     isAdmin: true
// }

// computed properties 
// we can use square brackets in an object leteral, when creating an object. that's called computed properties 

// let bag = {
//     [fruit]: 5,
// }

// // there is a special 'in' operator which checks that any given key exists in objects or not. 
// console.log('name' in user);
// console.log('blabla'in user)


// the 'for..in' loop 
// to walk over all keys of an object,there exists a special form of the loop: 
// for...in
// for(let kabc in user){
//     console.log(kabc)
//     console.log(user[kabc])
// }

// ordered like an object 

let codes = {
    '2':'Pune',
    '1':'ncr',
    '3':'Banglore',
    'fullstack':'react,node',
    'devops': 'cloud,go'
}

// 
// for(let prop in user){
//     console.log(prop)
// }

// tasks 
// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

let user = {}
user.name = 'john'
user.surname = 'smith'
// user.name = 'pete'
// delete user.name
// delete user.surname

// task 2 
// let isEmpty = (obj) => {
//     for(let prop in obj){
//         return false
//        }
//     return true
// }

// console.log(isEmpty(user))

// task-3 Sum object properties
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
  ayush: 'ayush'
}
// let sum = 0 ;
// for(let prop in salaries){
//     sum += salaries[prop] 
// }

// console.log(sum)
for(let prop in salaries){
    console.log(typeof salaries[prop] == 'number')
}

// Multiply numeric property values by 2
let multiplyNumeric = (obj) => {
    for(let prop in obj){
        if(typeof obj[prop] == 'number'){
          obj[prop] =   obj[prop] * 2 
        }
    }
    return obj
}


console.log(multiplyNumeric(salaries))
