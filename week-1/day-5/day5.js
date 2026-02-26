// The Switch statement 
// A switch statement can replace multiple if checks 

// let a = 'ram';
// switch (a) {
//      case 'ram':
//         console.log('found ram')
        
//     case 4:
//         console.log('what is this')
//         break
//     case 5:
//         console.log("hello day5")
   
// }
// console.log(browser)


//  function getSeason(month){
//     switch(month){
//         case 1:
//         case 2: 
//         case 12: 
//         return 'Winter'
//         case 3:
//         case 4: 
//         case 5: 
//          return 'Spring'
//         case 6:
//         case 7: 
//         case 8: 
//          return 'Summer'
//         case 9:
//         case 10: 
//         case 11: 
//          return 'Fall'
//         default:
//         return 'Invalid month'
//     }
     
//  }



//  // Task 2: Simple Calculator (switch version)
// function calculate(a, b, operator) {
//     switch(operator){
//         case  '+' :
//         return a + b 
//         case  '-' :
//         return a - b 
//         case  '*' :
//         return a * b 
//         case  '/' :
//         return a / b 
//         case  '%' :
//         return a % b 
//         default : 
//         return 'Wrong operator'
//     }
//   // Use switch for +, -, *, /, %
//   // Return result
// }

// // Test cases:
// console.log(getSeason(1));  // "Winter"
// console.log(getSeason(27));  // "Summer"
// console.log(calculate(10, 5, "+")); // 15
// console.log(calculate(10, 5, "$")); // 50

// // Task 3: Grade to GPA
// function gradeToGPA(grade) {
//     switch(grade){
//         case 'A':
//             return '4.0'
//         case 'B':
//             return '3.0'
//         case 'C':
//             return '2.0'
//         case 'D':
//             return '1.0'
//         case 'F':
//             return '0.0'
//         default:
//             return 'Invalid grade'
//     }
//   // A -> 4.0
//   // B -> 3.0
//   // C -> 2.0
//   // D -> 1.0
//   // F -> 0.0
//   // Use switch
// }
// console.log(gradeToGPA('E'));
// Functions 

// function showMessage(from,text = 'no text given'){
//     from = '*' + from + '*';
//     return (from + ': '+text);

// }
// let from = 'ayush'
// console.log(showMessage(from,'hello world'));
// console.log(from)

// let sayHi = function() {        // function expression
// return('hello')
// };

// let func = sayHi;
// console.log(func);

// Callback functions


// arrow function 
// let abc = () => console.log('hello')
// abc();

// YOUR PRACTICE:
// 1. Create isEven() as arrow function
// 2. Create getFullName(first, last) as function expression
// 3. Create getMax(a, b, c) as arrow function
// 4. Create reverseString(str) any way you want

//  let isEven = (num) => {
//     if(num%2==0){
//         console.log('iseven')
//     }
//     else{
//         console.log('isodd')
//     }
//  }
// isEven(8)

// let greet = function(first, last){
//   return `hello ${first} ${last}`
// }
// greet('ayush','singh');

// let getmax = (a,b,c) => {
//     return b;
// }

// day - 5 array and array method. 
let arr = ['apple','banana','Orange',]
// console.log(arr)
// Methods pop/push , shift/unshift
// push: appends an element to the end
// shift: get an element from the beginning, advancing the queue,
// so that the 2nd element becomes the 1st
// arrays in js can work both as a queue and as a stack. they allow you
// to add/ remove elements, both to/from the beginning or the end. 

// pop 
// Extracts the last element of the array and returns it 
// console.log(arr.pop());

// push 
// append the elements to the end of the array
// arr.push('Pear')
// console.log(arr)

// Methods that work with the beginning of the array: 

// shift 
// Extracts the first elemnt of the array and returns it 
// arr.shift();
// console.log(arr);

// unshift 
// Add the element of the beginning of the array
// arr.unshift('kiwi')
// console.log(arr)

//Methods push and unshift can add multiple elements at once:
// console.log(arr)
// arr.push('grapes','avagandu','strawberry');
// arr.unshift('berries','black grapes')
// console.log(arr)
// arr.age = 23;
// console.log(arr);
// console.log(arr.age)

// for(let i = 0 ; i < arr.length ; i++){
//     console.log(`${i} is the index of ${arr[i]}`)
// }
// arr.shift()
// for(let i = 0 ; i < arr.length ; i++){
//     console.log(`After shift method ${i} is the index of ${arr[i]}`)
// }
// for(let i = 0 ; i < arr.length ; i++){
//     console.log(`${i} is the index of ${arr[i]}`)
// }
// arr.pop() // pop is faster than shift/unshift as pop does not need to shift anything
// for(let i = 0 ; i < arr.length ; i++){
//     console.log(`After pop method ${i} is the index of ${arr[i]}`)
// }

// for(let element of arr){ // for ..of loop for each element in the array
//     console.log(element)
// }

// for (let key in arr){
//     console.log(arr[key])
// }

// length 
// let newarr = []
// console.log(newarr.length)
// console.log(newarr)

// toString 
// console.log(toString(arr))

let numbers = [1,2,3,4,5];

// 1. // iterate through array
// numbers.forEach(num => {
//     console.log(num * 2)
// })

// 2. // map - transform each element
// let doubled = numbers.map(num => num * 3)
// console.log(doubled)

// 3. // filter get elements that match condition 
// let evens = numbers.filter(num => num%2===0);
// console.log(evens)

// 4. // find - get first element that matches 
//    let firstEven = numbers.find(num => num % 2 === 0)
//    console.log(firstEven)

// 5. // reduce - reduce array to single value 
    // let sum = numbers.reduce((total,num) => total + num , 0);
    // console.log(sum);
// 6. some - check if ANY element matches
// let hasEven = numbers.some(num => num % 2 === 0);
// console.log(hasEven)

// 7. every - check if all elements match 
// let allPositive = numbers.every(num => num > 0)
// console.log(allPositive)

// ========================================
// YOUR PRACTICE PROBLEMS
// ========================================

let students = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 92 },
  { name: "Charlie", age: 21, grade: 78 },
  { name: "David", age: 20, grade: 95 }
];

// Task 1: Get all student names (use map)
// Expected: ["Alice", "Bob", "Charlie", "David"]

// let names = students.map(boys => boys.name)
// console.log(names)

// Task 2: Get students with grade >= 90 (use filter)
// Expected: [{name: "Bob", ...}, {name: "David", ...}]
// so here we will use filter to find match conditions 

// let toppers = students.filter( data => data.grade >= 90)
// console.log(toppers)

// Task 3: Find first student age 21 (use find)
// Expected: {name: "Charlie", ...}

let senior = students.find(st => st.age === 21)
console.log(senior)

// Task 4: Calculate average grade (use reduce)
// Expected: 87.5


// Task 5: Check if any student is under 20 (use some)
// Expected: false

// Task 6: Check if all students passed (grade >= 70) (use every)
// Expected: true

// WRITE YOUR SOLUTIONS HERE