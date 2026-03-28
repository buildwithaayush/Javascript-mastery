// so lets understand what happen bts of a javascript code 
// before the code runs it creates a global execution context in background 
// which has two side one is memory allocation to variables and functions.
// and other is executing code by call stacks. the former one is called hoisting. 


// if(true){
//     var x = 8;
// }
// console.log(x)

// if(true){
//     let x = 8;
// }
// console.log(x)

// myName();
// function myName(){
//     console.log('Ayush')
// }