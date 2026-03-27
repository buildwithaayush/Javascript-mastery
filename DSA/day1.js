// two sum 
let nums = [2,3,4,7]
 function twoSum(nums, target) {
    let ans = []
    for(let i = 0; i < nums.length -1; i++){
        for(let j = 1; j < nums.length; j++){
          console.log(ans[i]+ ans[j])
        }
    }
    return ans;
};

console.log(twoSum(nums,0))