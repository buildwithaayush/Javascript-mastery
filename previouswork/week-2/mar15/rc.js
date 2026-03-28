// function pow(x, n){
//     let result = 1;

//     for(let i = 0; i < n ; i++){
//         result*=x;
//     }

//     return result;
// }



// function pow(x, n){
//     if (n == 1 ){
//         return x;
//     }
//     else{
//         return x * pow(x , n - 1);
//     }
// }
// console.log(pow(2,3))

// The execution context and stack 
// the execution context is an internal data structure that contains details about
// the execution of a function.

//The new current execution context is on top (and bold), and previous remembered contexts are below.
//The process repeats: a new subcall is made at line 5, now with arguments x=2, n=1.

// A new execution context is created, the previous one is pushed on top of the stack:

// Context: { x: 2, n: 1, at line 1 } pow(2, 1)
// Context: { x: 2, n: 2, at line 5 } pow(2, 2)
// Context: { x: 2, n: 3, at line 5 } pow(2, 3)
// There are 2 old contexts now and 1 currently running for pow(2, 1).
// let bud = [1,2,3,4]
// console.log(Array.isArray(bud))

// let company = {


//   development: {
//     sites: [{
//       name: 'Peter',
//       salary: 2000
//     }, {
//       name: 'Alex',
//       salary: 1800
//     }],

//     internals: [{
//       name: 'Jack',
//       salary: 1300
//     }]
//   }
// };

// for (let element of Object.values(company)){
//     console.log(element)
// }

// Recursive structures 
// A recursive( recursively-defined ) data structure is a structure that replicates itself in parts 


// Linked List
// let list = { 
//     value: 1, 
//     next:{
//         value:2,
//         next:{
//             value:3,
//             next:{
//                 value:4,
//                 next: null
//             }
//         }
//     }
// }

// let list = {value: 1,
//     next: {
//         value: 2,
//         next:{
//             value:3,
//             next:null
//         }
//     }
// }
// list = {value: 4,next:list}

//

// let list = {value: 1}
// list.next = {value: 2}
// console.log(list)
// list.next.next = {value: 3}
// console.log(list)

console.log("\n=== PRACTICE PROBLEMS ===\n");

// PROBLEM 1: Sum all numbers from 1 to n using recursion
function sumRecursive(n) {
    if(n == 1){
        return n
    }
    else{
        return  n + sumRecursive(n-1)
    }
  // YOUR CODE
  // Base case: if n === 1, return 1
  // Recursive case: return n + sumRecursive(n - 1)
}

// console.log(sumRecursive(5)); // 15


// PROBLEM 2: Count down using recursion
function countDown(n) {
    let ans = ''
    if (n < 1){
        return 
    }
    return  countDown(n-1)
  // Print numbers from n down to 1
  // YOUR CODE
}

// countDown(5); // 5, 4, 3, 2, 1


// PROBLEM 3: Calculate power using recursion
function power(base, exponent) {
    if(exponent == 1){
        return base
    }else{
        return base * power(base,exponent-1)
    }

    
        
    
  // YOUR CODE
}

console.log(power(2, 4)); // 16


// PROBLEM 4: Reverse a string using recursion
function reverseString(str) {
    if(str === ''){
        return ''
    }
    else{
        return reverseString(str.substr(1) + str.charAt(0))
    }
  // YOUR CODE
  // Hint: if (str === "") return "";
  // return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("hello")); // "olleh"


// PROBLEM 5: Check if string is palindrome using recursion
function isPalindrome(str) {
  // YOUR CODE
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false