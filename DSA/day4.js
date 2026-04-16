// two sum 
// let arr = [2,7,11,16]
// function twoSum(nums,target){
//     let set = new Set();
//     for(let i = 0; i < nums.length ; i++){
//         let lookup =   target - nums[i];
//         if(set.has(lookup)){
//             return [nums[i],lookup]
//         }
//         else{
//             set.add(nums[i])
//         }
//     }
// }

// console.log(twoSum(arr,18))

s = 'abca'

function palindrome(s){
   let start = 0;
   let end = s.length - 1;
   while(start < end){
    if(s[start] != s[end]){
      let start = start++;
       
    }
    start ++;
    end--;
   }
   return 'Is palindrome'
}

console.log(palindrome(s))