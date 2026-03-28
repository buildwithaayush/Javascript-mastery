// var is not block scope its a function scope and global scope 
if(true){
    var ans = 'hahahaha'
}
console.log(ans)

// function sayHi(){
//     if(true){
//         var check = 'phrase'
//     }
//     console.log(check)
// }

// sayHi();
//console.log(check)

// 'var' tolerates redeclarations 
let user;  // we cannot redeclare a variable using let 

var person = 'pete';
var person = 'john';
// with 'var' we can redeclare any number of times.

console.log(person)

// 'var' variable can be declared below their use 
function sayHi(){
    console.log(check)
var check = 'phrase'
}

sayHi();