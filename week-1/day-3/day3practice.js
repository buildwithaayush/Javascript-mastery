// // Problem 1: Grade Calculator
// function getGrade(score) {
//     if(score >= 90){
//         return 'A'
//     }
//     else if(score >= 80){
//         return 'B'
//     }
//     else if(score >= 70){
//        return 'C'
//     }
//     else if(score >= 60){
//         return 'D'
//     }
//     else{
//         return 'F'
//     }
//   // If score >= 90: "A"
//   // If score >= 80: "B"
//   // If score >= 70: "C"
//   // If score >= 60: "D"
//   // Else: "F"
// }

// // Test cases:
// console.log(getGrade(85)); 
// console.log(getGrade(24)); // "A"

// console.log(getGrade(65)); // "D"

// // Problem 2: Leap Year Checker
// function isLeapYear(year) {


// if(year % 400 === 0)return true;
// if(year % 100 === 0) return false;
// if(year % 4 === 0) return true;
// return false;
  
//   // Divisible by 4 = leap year
//   // EXCEPT if divisible by 100 = not leap year
//   // EXCEPT if divisible by 400 = leap year
//   // Return true/false
// }

// // Test cases:
// console.log(isLeapYear(2024)); // true
// console.log(isLeapYear(1900)); // false
// console.log(isLeapYear(2000)); // true

// // Problem 3: Max of Three Numbers
// function maxOfThree(a, b, c) {
//     if(a > b && a > c ){
//         return a
//     }
//     else if(b > a && b > c){
//         return b
//     }
//     else{
//         return c
//     }
//   // Return the largest number
//   // Use if/else (don't use Math.max)
// }

// // Test cases:
// console.log(maxOfThree(5, 10, 3)); // 10
// console.log(maxOfThree(15, 8, 12)); // 15

// Problem 4: Ticket Pricing
function getTicketPrice(age) {
    if(age < 3){
        return 0
    }
    else if(age < 13){
        return 10
    }
    else if(age < 64){
        return 20
    }
    else{
        return 15
    }
  // Under 3: free (0)
  // 3-12: child (10)
  // 13-64: adult (20)
  // 65+: senior (15)
}

// Test cases:
console.log(getTicketPrice(2));  // 0
console.log(getTicketPrice(10)); // 10
console.log(getTicketPrice(30)); // 20
console.log(getTicketPrice(70)); // 15