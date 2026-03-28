// variable scope, closure
// let x = 7;
// function num(){
//     console.log(x)
// }
// num()
// Code blocks 
// if a variable is declared inside a code block {....}, it's only 
// visible inside that block.
// {
//     let message = 'hello';
//     console.log(message)
// } 
// console.log(message) this is refering to variable inside code. hence it is 
// giving reference error.

// {
//     let message = 'hello';
//     console.log(message)
// } 
// {
//     let message = 'Goodbye';
//     console.log(message)
// } 
// this scope restriction for let/const in a block will continue for if, for, while

// Nested functions 
// A function is called 'nested' when it is created inside another function 
// function sayHiBye(firstName,lastName){
//     function getFullName(){
//         return firstName + ' ' + lastName;
//     }
//     console.log('hello,' + getFullName())
//     console.log('bye,' + getFullName())

// }
// function makeCounter(){
//     let count = 0;

//     return function(){
//         return count++;
//     }
// }

// let counter = makeCounter()

// console.log(counter())
// console.log(counter())
// console.log(counter())


//------------------------- Lexical Environment ------------------------
// so when execution context is created for any function then its local memory + refrence to parents lexical environment is  called 
// lexical environment

// and this whole chain of lexical environment is called scope chaining. 





// step 1 
// console.log(phrase)
// let phrase;
// console.log(phrase)
// phrase = 'total'
// console.log(phrase)
var b = 80;
function a(){
    
     function c(){
       
        console.log(b)
    }
    c()
}

a();
// when engine goes from inner lexical environment to the outer and so on till it find or reaches
// global lexical enviornment parent that is null. this process of looking heierachaly from inner scope to 
// the last one  is called scope chaining









