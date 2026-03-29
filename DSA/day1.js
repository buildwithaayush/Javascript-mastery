// two sum 
// let nums = [2,3,4,7]
//  function twoSum(nums, target) {
//     let ans = []
//     for(let i = 0; i < nums.length -1; i++){
//         for(let j = 1; j < nums.length; j++){
//           console.log(ans[i]+ ans[j])
//         }
//     }
//     return ans;
// };

// console.log(twoSum(nums,0))

// // Remove duplicate 
// let num = [0,0,1,1,1,2,2,2,3]
// function removeDuplicate(nums){
//   let k = 0;
//   for(let i = 0 ; i < nums.length; i++)
// {
//   if (nums[i] !== nums[k]){
//   k++;
//   nums[k] = nums[i]
// }
// }
// return k+1;
// }

//  let ans = removeDuplicate(num)
// console.log(ans)
// console.log(num)

// stock selling 
// [7,1,5,4]

// let minPrice = nums[0];
// let maxProfit = 0;

// for (let i = 1; i < nums.length; i++) {
//   if(nums[i] < minPrice){
//     minPrice = nums[i]
//   }
//   todayProfit= nums[i]-minPrice;
//   if(todayProfit > maxProfit){
//     maxProfit = todayProfit;
//   }
  
//     // step 1: update minPrice if today is cheaper
//     // step 2: calculate today's profit
//     // step 3: update maxProfit if today's profit is better
// }
// return maxProfit;

// let nums = [1,2,3,3];
// function containsDuplicate(nums){
//   for(let k = 0 ; k < nums.length -1; k++){
//   for(let i = k+1 ; i < nums.length; i++){
//     if(nums[k] == nums[i]){
//       return true;
//     }
//   }
// }
// return false;
// }



// this solution is a O(n^2)

// we wil now solve it with hashset. Js its just set only 
// let nums = [1,2,3,3];
// function containsDuplicate(nums){
// let set = new Set();
// for(let i = 0; i < nums.length; i++){
//     if(set.has(nums[i])){
//       return true;
//     }
//     else{
//       set.add(nums[i])
//     }
   
//   }
//    return false;
// }
// let ans = containsDuplicate(nums);
// console.log(ans);


// let pocket = 0;
// let best = -Infinity;

// for (let i = 0; i < nums.length; i++) {
//     // add nums[i] to pocket
//       pocket += nums[i];
//     // update best if pocket is bigger
//     if(pocket > best){
//       best = pocket
//     }
//     // if pocket is negative, reset to 0
//     if(pocket < 0){
//       pocket = 0
//     }
// }
// return best;
  
let nums = [0,1,0,13,12]
function moveZeros(nums){
  let k = 0;
for (let i = 0; i < nums.length; i++){
  if(nums[i]!=0){
    nums[k]=nums[i];
    k++;
  }
}
for(let i = k; i < nums.length; i++){
    nums[i] = 0;
}
}
moveZeros(nums);
console.log(nums);


function twoSum(nums,target){
  let map = new Map();
  for(let i = 0; i < nums.length; i++){
    let complement = target - nums[i];
    if(map.has(complement)){
      return [map.get(complement),i]
    }
    else{
      map.set(nums[i],i)
    }
  }
}


  

