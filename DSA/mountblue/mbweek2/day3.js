// function leapyear(year){
// if (year == '1918'){
// return `26.09.${year}`
// }

// let isLeap;
// if(year < 1918){
//     isLeap = year%4===0;
// }
// else{
//     isLeap = (year%400===0) || (year%100!==0 && year%4===0)
// }
// return isLeap ? `12.09.${year}` : `13.09.${year}`;
// }

// function hurdleRace(k, height) {
//   let max = height[0];
//   for(let i = 1 ; i < height.length ; i++){
//     if(height[i] > max){
//         max = height[i]
//     }
  
//   }
//   return Math.max(0,max-k)

// }


// function minimumNumber( n,password) {
//     let hasLower = false;
//     let hasUpper = false;
//     let hasNum = false; 
//     let hasspecial = false;
// for(let char of password){
//     if(char >= 'a' && char <= 'z') hasLower = true;
//     else if(char >= 'A' && char <= 'Z') hasUpper = true;
//     else if(char >= '0' && char <= '9') hasNum = true; 
//     else hasspecial = true; 
    
// }
    

// let missing = 0
// if(!hasLower) missing++;
// if(!hasUpper) missing++;
// if(!hasNum) missing++;
// if(!hasspecial) missing++

// return Math.max(missing,6-n)
//     // Return the minimum number of characters to make the password strong
// }

function minimumAbsoluteDifference(arr) {
  let sortedArr = arr.sort((a,b)=> a - b);
  let start = 0;
  let end = start + 1;
  let min = Infinity;
  while(end < arr.length){
    let diff = Math.abs(sortedArr[start]-sortedArr[end]);
    if(diff < min ){
        min = diff
    }
    start++;
    end++;
  }

  return min;
}
let ans = minimumAbsoluteDifference([6,3,1])
console.log(ans)