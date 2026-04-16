// function miniMaxSum(arr) {
//     // Write your code here
//     let sum = 0;
//     let min = Number.MAX_VALUE;
//     let max = Number.MIN_VALUE;

//     for(let i = 0 ; i < 5 ; i++){
//         if(arr[i] < min){
//             min = arr[i];
//         }
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }

    

//         for(let i = 0 ; i < 5 ; i++){
//         sum+=arr[i];
//         }
//     let minSum = sum - max;
//     let maxSum = sum - min;

//     return [ minSum , maxSum]

// }

// let arr = [1,3,5,7,9];
// // let ans = miniMaxSum(arr);
// // console.log(ans)
// let sum;
//  for(let i = 0 ; i < 5 ; i++){
       
// sum+=arr[i];
//     }

//     console.log(sum)

// function divisibleSumPairs(n, k, ar) {
//     let count = 0;
//     for(let i = 0 ; i < n; i++){
//         for(let j = i+1; j < n ; j++){
            
//                 let sum = ar[i] + ar[j];
//                 if(sum%k===0){
//                     count++;
//                 }
            
//         }
//     }
//     return count;

// }
s = 'aba'

function palindrome(s){
   let start = 0;
   let end = s.length - 1;
   while(start < end){
    if(s[start] != s[end]){
        return 'Not Palindrome'
    }
   }
   return 'Is palindrome'
}