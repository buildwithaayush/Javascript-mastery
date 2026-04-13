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

function bonAppetit(bill,k,b){
  bill.splice(k,1);
  let total = 0;
  for(let i = 0 ; i < bill.length;i++){
    total += bill[i];
  }
  let actualBill = total/2
  let annaPaid = actualBill - b
  if(annaPaid == 0){
    return 'Bon Appetit'
  }
  else{
    return annaPaid
  }
}

let bills =[12,3,4]
// bills.splice(1,1)
// console.log(bills)
 bonAppetit(bills,1)