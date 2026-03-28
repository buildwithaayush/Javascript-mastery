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

// let codes = {
//     '2':'Pune',
//     '1':'ncr',
//     '3':'Banglore',
//     'fullstack':'react,node',
//     'devops': 'cloud,go'
// }

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

// let user = {}
// user.name = 'john'
// user.surname = 'smith'
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
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
//   ayush: 'ayush'
// }
// let sum = 0 ;
// for(let prop in salaries){
//     sum += salaries[prop] 
// }

// // console.log(sum)
// for(let prop in salaries){
//     console.log(typeof salaries[prop] == 'number')
// }

// // Multiply numeric property values by 2
// let multiplyNumeric = (obj) => {
//     for(let prop in obj){
//         if(typeof obj[prop] == 'number'){
//           obj[prop] =   obj[prop] * 2 
//         }
//     }
//     return obj
// }


// console.log(multiplyNumeric(salaries))

// object references and copying 
//object are stored and copied 'by reference' 
// whereas primitive values are always copied 'as a whole value'
// a variable assigned to an object stores not the object itself , but its 'address in memory' 
// in other words 'a reference' to it 

// let user = {
//     name: 'john'
// };
// let admin = user;
// admin.surname = 'pandey'
// console.log(user)

// comparison by reference 
// two objects are equal only if they are the same object 

// let a = {};
// let b = {};

// console.log(a == b);
// console.log(a === b);

// cloning and merging , object.assign 
// let clone = {}
// for(let key in user){
//     clone[key] = user[key]
// }
// console.log(clone)

// for(let key in user){
//    console.log(key)
// }
// we can also use the method Object.assign(dest, ..sources)

// let permission1 = { canView: true}
// let permission2 = { canEdit: true}

// Object.assign(user,permission1,permission2)
// console.log(user)

// Object.assign(user,{name: 'pete'})
// console.log(user)

// // Object.assign can be used for performing a simple object cloning:
// let clone = Object.assign({},user)
// console.log(clone)

// Nested cloning 
// let user = {
//     name: 'ayush',
//     health: {
//         weight: 66,
//         height: 173
//     }
// }
// console.log(user.health.height)
// let clone = Object.assign({},user)
// console.log(clone)
// console.log(user.health === clone.health)
// clone.health.height = 13;
// console.log(user)

// Object assign changes the value at both place 
// to fix this issue we have structuredClone
// let clone = structuredClone(user);
// console.log(user.health === clone.health);
// user.health.height = 22;
// console.log(clone)

// object methods,'this'
let user = {
    name: 'pete',
    age: 30,
    sayHi() {
        console.log('Hello '+ this.name)
    }
};

// user.sayHi = () =>{
//     console.log('Hello!')
// }

// user.sayHi()
// A function that is a property of an object is called its method. 
// 'this' in methods
// its common that an object method needs to access the information stored in the object 
//to access the object, a method can use this keyword. 

// let admin = user;
// console.log(admin)
// user = null;
// console.log(admin)
// admin.sayHi()

// 'this' is not bound 
// in javascript , keyword 'this' behaves unlike most other programming languages. 
// it can be used in any function, even if it's not a method of an object.

function sayHello(){
    console.log(`welcome  ${this.name}`)
}

let users = { name: 'john'}
let admin = {name: 'Admin'}

users.f = sayHello
admin.f = sayHello

// users.f()
// admin.f()
// admin['f']();
// // tasks 

// let ladder = {
//     step: 0,
//     up(){
//         this.step++
//     },
//     down(){
//         this.step--
//     },
//     showstep(){
//         console.log(this.step)
//     }
// }
// ladder.showstep();
// ladder.up();
// ladder.up();
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.down();
// ladder.showstep();
// ladder.down();
// ladder.showstep();

// let book = {
//     title:'The Fountainhead',
//     author:'Ayn rand',
//     year:'1943',
//     pages: 704,
//     isRead: 'Ongoing',
//     getSummary(){
//         return `${this.title} by ${this.author} (${this.year})`
//     }


// }
// console.log(book.getSummary())

// PROBLEM 2: Bank Account
// Create an object with:
// - balance property
// - deposit(amount) method
// - withdraw(amount) method (check if sufficient balance)
// - getBalance() method

let bank = {
    balance:0,
    deposit(amount){
        if(amount<=0){
            return 'Invalid amount'
        }
        this.balance += this.balance
        return ` ₹ ${amount} Has been credited to your bank account. Total balance ₹ ${this.balance}`
    },
    withdraw(amount){
        if(this.balance >= amount){
            this.balance -= amount;
            return `₹ ${amount} Has been debited From your bank account. Total balance ₹ ${this.balance}`
     
        }

        return `Fund insuffcient`
    },
    getBalance(){
        return `₹ ${this.balance}  is your current balance.`
    }
}
// YOUR CODE HERE
// console.log(bank.getBalance())

// console.log(bank.deposit(500))

// PROBLEM 3: Student object
// Create a student with:
// - name, age, grade
// - subjects (array of strings)
// - address (nested object with city, country)
// - addSubject(subject) method
// - getInfo() method

let student = {
    name: 'ayush',
    age: 23,
    grade: 'A+',
    subjects: ['oops','dbms','os','system design'],
    address: {
       city: 'satna',
       country: 'India'
    },
    addSubject(subject){
        this.subjects.push(subject)
        return `${subject} Added successfuly !`
    },
    getInfo(){
        return ` I am ${this.name} studying ${this.subjects.join(', ')} . I hold good cmnd over ${this.subjects[this.subjects.length -1]}. I belong to ${this.address.city}`
    },
    removeSubject(subject){
        // let index = this.subjects.indexOf(subject)
        // if(index >= 0){
        // this.subjects.splice(index,1)
        //  return ` ${subject} removed successfully`
        // }
        // return `${subject} not found`

        let newsubjects = this.subjects.filter(sub => sub !== subject)
        this.subjects = newsubjects;

    }
}
// console.log(student.addSubject('DSA'))
// console.log(student.getInfo())
//  console.log(student.removeSubject('dbms'))
//  console.log(student.subjects)





// YOUR CODE HERE


// PROBLEM 4: Shopping cart
const cart = {
  items: [],
  
  addItem(name, price, quantity) {
    this.items.push({name:name,price:price,quantity:quantity})
    // Add item to cart
    // YOUR CODE
  },
  
  removeItem(name) {
    this.items = this.items.filter(item => item.name !== name)
  },
  
  getTotal() {
    let total = this.items.reduce((sum , item) => sum += item.price * item.quantity  , 0)
    return total
    // Calculate total price
    // YOUR CODE
  },
  
  getItemCount() {
    let total = this.items.reduce((sum , item) => sum += item , 0)
    return total
    // YOUR CODE
  }
};

// Test your cart
cart.addItem("Apple", 1.5, 3);
cart.addItem("Banana", 0.8, 5);
console.log(cart.items)
// console.log(cart.getTotal());      // Should calculate total
// console.log(cart.getItemCount());  // Should count items


