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

// function createEventEmitter() {
//     const events = {}; // closure: { eventName: [fn1, fn2, ...] }
  
//     return {
//       on(event, listener) {
//         // If events[event] doesn't exist, create an empty array
//         // Push the listener to that array
//         // Return 'this' for chaining
//       },
  
//       emit(event, ...args) {
//         // Find all listeners for this event
//         // Call each one with the provided args
//         // Return 'this' for chaining
//       },
  
//       off(event, listener) {
//         // Find the listeners array for this event
//         // Remove the specific listener (filter it out)
//         // Return 'this' for chaining
//       }
//     };
//   }


