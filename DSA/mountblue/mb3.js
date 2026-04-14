// let s = 'aabbccd'
// let chars = s.split('');
// let start = 0; 
// let end = 1;
// while(end < chars.length){
//     if(chars[start] == chars[end]){
//         chars.shift(start);
//         chars.shift(end);
//         start++
//         end++
//     }else{
//         start++;
//         end++;
//     }
// }
   
   
    

// console.log(chars)

// let stack = []
// stack.push(10)
// stack.push(20)
// console.log(stack)
// stack.pop()
// console.log(stack)

// let stack = [];
// for (let i = 0; i < s.length; i++) {
//     if (s[i] === '(') {
//         stack.push(s[i])
//     } else {
//         if(stack.length == 0){
//             return false;
//         }
//         if(stack[stack.length-1] == '(')
//         stack.pop()
//     }
// }
// if(stack.length == 0){
//     return true;
// }
// else{
//     return false;
// }



// function validParenthesis(s){
//     let stack = [];
//     let map = new Map();
//     map.set('(', ')');
//     map.set('{', '}');
//     map.set('[', ']');

//     for(let i=0; i < s.length; i++ ){
//         if (s[i] === '(' || s[i] === '{' || s[i] === '['){
//             stack.push(s[i])
//         }
//         else{
//             if(stack.length==0){
//                 return false;
//             }
//             let top = stack[stack.length-1];
//             if(map.get(top) == s[i]){
//                 stack.pop()
//             }
//             else{
//                 return false;
//             }
//         }
//     }
//     if(stack.length==0){
//         return true;
//     }else{
//         return false;
//     }
// }



// let s = '([])'
// let map = new Map();
// map.set('(',')')
// map.set('{','}')
// map.set('[',']')
// let stack = []

    
// console.log(map.get(top))

// function reducedString(s){
//     let stack = [];
//     for(let i = 0; i < s.length; i++){
//     let top = stack[stack.length-1]
//       if(stack.length === 0 || s[i] != top){
//         stack.push(s[i])
//       }
//       else{
//         stack.pop()
//       }
     

//     }
//     if(stack.length === 0){
//         return 'Empty String'
//     }else{
//         return stack.join('')
//     }
    


// }

// function bonAppetit(bill,k,b){
//   bill.splice(k,1);
//   let total = 0;
//   for(let i = 0 ; i < bill.length;i++){
//     total += bill[i];
//   }
//   let actualBill = total/2
//   let annaPaid = actualBill - b
//   if(annaPaid == 0){
//     return 'Bon Appetit'
//   }
//   else{
//     return annaPaid
//   }
// }

// let bills =[12,3,4]
// // bills.splice(1,1)
// // console.log(bills)
//  bonAppetit(bills,1)

// function birthday(s,d,m){
//   let count = 0;
//  let start = 0;
//  let end = m-1;
//  while(end <= s.length){
//     let total = 0;
//   for(let i = start ; i <= end; i++){
//     total += s[i];
//   }
//   if(total == d){
//     count++;
//   }
//   start++;
//   end++;
//  }
//  console.log()
// }
// let arr = [1,2,1,3,2];
// let ans = birthday(arr,3,2);
// console.log(ans)

function Bird(arr){
  let map = new Map();
  for(let i = 0; i < arr.length ; i++){
     map.set(arr[i],(map.get(arr[i])||0)+1)
  }
  let max = Number.MIN_VALUE
  let result = Number.MIN_VALUE
  for(let[key,value] of map){
    if(value > max){
      max = value
      result = key;
    }
    else if(value == max){
      if(key < result){
         result = key;
      }
    }
  }
  return result;
}
// console.log(Number.MIN_VALUE)
let arr = [1,2,2,2,2,3,3,5]
let ans = Bird(arr)
console.log(ans)