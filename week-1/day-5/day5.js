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

// Task 3: Grade to GPA
function gradeToGPA(grade) {
    switch(grade){
        case 'A':
            return '4.0'
        case 'B':
            return '3.0'
        case 'C':
            return '2.0'
        case 'D':
            return '1.0'
        case 'F':
            return '0.0'
        default:
            return 'Invalid grade'
    }
  // A -> 4.0
  // B -> 3.0
  // C -> 2.0
  // D -> 1.0
  // F -> 0.0
  // Use switch
}
console.log(gradeToGPA('E'));