// assignment-3b-array-stats.js

// Create a comprehensive statistics calculator for arrays

function analyzeArray(numbers) {
    let count = numbers.length;
    let sum = numbers.reduce((sum,current) => sum + current,0)
    let average = sum / count ;
    let minimum  = (numbers) => {
        let min = numbers[0];
        for(let i = 1; i < count ; i ++){
        if(numbers[i]< min){
            min = numbers[i];
        }
        }
        return min;
    }
    let min = minimum(numbers);
    let max = (numbers) => {
        let max = numbers[0];
        for(let i = 1; i < count ; i ++){
        if(numbers[i]> max){
            max = numbers[i];
        }
        }
        return max;
    }
    
     let median = (numbers) => {
      let sortedArr = numbers.sort((a,b)=> a-b)
      let mid = Math.floor(sortedArr.length/2)
      let median;
      if(numbers.length%2 == 0){
        median = (sortedArr[mid -1] + sortedArr[mid ])/2

      }
      else {
       median = sortedArr[mid] 
      }
       return median; 
     }


//    let mode = (numbers) => {
//         let freq = {}
//         for(let num of numbers){
//             freq[num] = (freq[num] || 0) +1
//         }
//    }

    let range = max - min;
    let evenCount = (numbers)=>{
        count = 0
        for(let i = 0 ; i < count ; i++){
            if(numbers[i] % 2 == 0){
                count++;
            }
        }
        return count ;
    }
    let oddount = (numbers)=>{
        count = 0
        for(let i = 0 ; i < count ; i++){
            if(numbers[i] % 2 !== 0){
                count++;
            }
        }
        return count ;
    }

    let positiveCount = (numbers) => {
        let count = 0 
        for(let element of numbers){
            if(numbers > 0){
                count++;
            }
        }
        return count;
    }
    let negativeCount = (numbers) => {
        let count = 0 
        for(let element of numbers){
            if(numbers < 0){
                count++;
            }
        }
        return count;
    }
    return {
    count: count,
    sum: sum,
    average: average ,
    min: min,
    max: max,
    median: median,
    // mode: most frequent number,
    range:range,
    evenCount: evenCount,
    oddCount: oddCount,
    positiveCount: positiveCount,
    negativeCount: negativeCount
  }


  // Return an object with:
  // {
  //   count: number of elements,
  //   sum: sum of all numbers,
  //   average: average (mean),
  //   min: minimum value,
  //   max: maximum value,
  //   median: median value,
  //   mode: most frequent number,
  //   range: max - min,
  //   evenCount: count of even numbers,
  //   oddCount: count of odd numbers,
  //   positiveCount: count of positive numbers,
  //   negativeCount: count of negative numbers
  // }
  
  // YOUR CODE HERE
}

// Test case:
let testArray = [5, 2, 8, 2, 9, 1, 5, 5];
console.log(analyzeArray(testArray));

// Expected output:
// {
//   count: 8,
//   sum: 37,
//   average: 4.625,
//   min: 1,
//   max: 9,
//   median: 5,
//   mode: 5,
//   range: 8,
//   evenCount: 2,
//   oddCount: 6,
//   positiveCount: 8,
//   negativeCount: 0
// }