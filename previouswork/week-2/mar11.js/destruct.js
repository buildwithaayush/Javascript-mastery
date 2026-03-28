// Destructuring assignment is a special syntax that allows us to 'unpack' arrays or objects into a bunch of variables as 
// as sometimes that's more convenient 

// let [firstName , surname ] = 'john smith'.split(' ')
// console.log(firstName)
// console.log(surname)

// ignore element using commas 
// let [firstName , , title,,pet] = ['rat','cat','bat','dog','lion']
// console.log(pet)

// Assign to anything on the left side 
let user = {};
[user.name, user.surname] = 'john Smith'.split(' ');

// console.log(user.name)
// console.log(user.surname)
// for(const [key,value] of Object.entries(user)){
//     console.log(`${key}:${value}`);
// }
// The rest '...'
let[name1,name2, ...titles] = ['ayush', 'singh','caesar','Consul']
// console.log(name1)
// console.log(name2)
// console.log(titles[0])
// Default values 
// if the array is shorter than the list of variables on the left, 
// there will be no errors 

// Object destructuring 
// the destructuring assignment also works with objects.

// let options = {
//     title: 'menu',
//     width: 100,
//     height: 200
// }
// let {title, ...dog} = options;
// console.log(dog.width)

// let {title, width , height} = options;
// console.log(title)
// console.log(width)
// console.log(height)

// let options = {
//     title: 'menu'
// }

// let {width: w = 100,height: h = 90 , title} = options;

// The rest pattern '...' in objects

// Nested destructuring 

let options = {
    title: 'My menu',
    items: ['Item1','Item2']
}
// function showMenu({title='untitles', width = 200, heighr})

