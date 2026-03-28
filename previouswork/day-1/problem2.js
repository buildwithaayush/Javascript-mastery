// assignment-2b-number-analyzer.js

// Create a function that analyzes a number
// and returns comprehensive information about it

function analyzeNumber(num) {
 let isEven = num % 2 == 0 
 let isOdd = !isEven
let isPrime = checkPrime(num)
let isPositive = num >= 0
let isNegative = !isPositive
let isZero = num == 0
let absoluteValue = abval(num);
let square = num ** 2
let cube = num ** 3
let digit = [absoluteValue]

  function abval(num){
    if(num < 0){
      return num * -1
    }
    else{
      return num;
    }
  }

    function checkPrime(num){
      if(num < 2){
        return false;
      }
      let i = 2;
    
      while(i*i <= num){
          if(num%i == 0){
            return false 
          }
       
          i++;
      }
      return true;
    }
  return {isEven: isEven, isOdd:isOdd ,
     isPrime: isPrime ,
     isPositive: isPositive,
     isNegative:isNegative,
    isZero:isZero,
    absoluteValue:absoluteValue,
    square:square,
    cube:cube,
    digit:digit

  }
  // Return an object with:
  // - isEven: boolean
  // - isOdd: boolean
  // - isPrime: boolean
  // - isPositive: boolean
  // - isNegative: boolean
  // - isZero: boolean
  // - absoluteValue: number
  // - square: number
  // - cube: number
  // - digits: array of digits
  
  // YOUR CODE HERE
}

// Test case:
  console.log(analyzeNumber(0));
  // Should return:
  // {
  //   isEven: false,
  //   isOdd: true,
  //   isPrime: true,
  //   isPositive: true,
  //   isNegative: false,
  //   isZero: false,
  //   absoluteValue: 7,
  //   square: 49,
  //   cube: 343,
  //   digits: [7]
  // }

// console.log(analyzeNumber(-12));
// console.log(analyzeNumber(0));