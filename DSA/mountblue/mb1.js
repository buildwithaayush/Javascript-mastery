// var isPalindrome = function(x) {
//     let num = Array.from(String(x),Number)
//     let start = 0; 
//     let end = num.length-1;
//     while(start < end){
//         if(num[start] == num[end]){
//             start++;
//             end--;
//         }
//         else{
//             return false;
//         }
//     }
//     return true;
// }

// let x = 123;
// let ans = isPalindrome(x);
// console.log(ans)
// let s =["H","a","n","n","a","h"]
// function reverseString(s){


// let start = 0 ;
// let end = s.length -1;
// while(start < end){
//     let temp = s[start];
//     s[start] = s[end];
//     s[end] = temp;

//     start++;
//     end--;
// }
// }

//  reverseString(s);
//  console.log(s)

// first unique character of a string
// let s = 'leetcode' 


// var firstUniqChar = function(s) {
//     let map = new Map();
//     for(let i = 0; i < s.length;i++){
//     map.set(s[i],map.get(s[i])|| 0) + 1
//     }

//     for(let i=0; i<s.length; i++){
//         if(map.get(s[i])==1){
//             return i
//         }
//     }
//     return -1;
// };

// let ans = firstUniqChar(s);
// console.log(ans)

// let arr = [2,-1,2,4,-3];

// function subarray(nums){
//     let best = 0;
//     let pocket = 0;
//     for(let i = 0 ; i < nums.length;i++){
//     pocket += nums[i]
//     if(pocket < 0){
//         pocket = 0;
//     }

//     if(pocket > best){
//         best = pocket 
//     }
//     }
//     return best;

 
// }
// let ans = subarray(arr);
// console.log(ans)

// let arr = [10,20,20,20,30,10,10];
// function frequencyCount(num){
//     let map = new Map();
//     for(let i = 0; i < num.length;i++){
//         map.set(num[i],(map.get(num[i]) || 0)+1)
//     }
//     let ans =0;
//     for(const [key,value] of map){
//         ans += Math.floor(value/2)
//     }
//     return ans;
// }

// let ans = frequencyCount(arr);
// console.log(ans)

// let ar = [0,2,5,3];
// let x1 = ar[0],v1=ar[1],x2=ar[2],v2=ar[3];
// let gap = x2 - x1;
// let speed = v1 - v2;
// if(gap === 0){
//     return 'YES'
// }
// if(v1 <=v2){
//     return 'NO'
// }
// if(gap%speed===0){
//     return 'YES'
// }
// return 'NO'


// * pattern question 
/*

*
**
***
****
   

*/

function pattern(n){
    let ans;
    for(let i = 0; i < n ;i++){
        ans = ''
        for(let j = n;j > n-i; j-- ){
            ans += ' *'
        }
        console.log(ans)
    }
   
}
pattern(4)