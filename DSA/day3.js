// Strings
// let isPalindrome = (s) =>{
//     let ans = s.toLowerCase().replace(/[^a-zA-Z0-9]/g,'')
//     let start = 0 ; 
//     let end = ans.length-1;
//     while(start < end ){
//         if(ans[start]!==ans[end]){
//             return false;
//         }
//         else{
//            start++;
//            end--;
//         }
    
//     }
//     return true;
// }

// let s = "A man, a plan, a canal: Panama";
// let result = isPalindrome(s);
// console.log(result)

// First Unique Character in a string 
// var firstUniqChar = function(s) {
//     let map = new Map();
//     for(let char of s){
//         map.set(char,(map.get(char)||0)+1);
//     }

//    for(let i =0; i<s.length;i++){
//     if(map.get(s[i])=== 1){
//         return i;
//     }
//    }
//    return -1
// };

