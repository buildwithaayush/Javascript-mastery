// Hoisting is JavaScript's behavior where variable and function declarations are moved to the top of their scope before execution.
// function test(){
//     let x = 3;
// }
// console.log(x)

// if(true){
//     var y = 2
// }
// console.log(y)

function outer(){
    let count = 0;

    return function inner(){
        count++;
        return count;
    }
}

const fn = outer();
console.log(fn())
console.log(fn())
console.log(fn())
console.log(fn())
console.log(fn())