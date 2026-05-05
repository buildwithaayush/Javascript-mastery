// function saveThePrisoner(n, m, s) {
//     let last = 0
//     for(let i = 0; i < m ; i++){
//         last = (i + m)%n
//     }
//     return last;
// }

// function beautifulDays(i, j, k) {
//     let count = 0;
//     for(let start = i ; start <= j; start++ ){
//         let abc = start
//         let sabc = String(abc)
//         let arr =sabc.split('')
//         let reversearr = arr.reverse()
//         let reverseString= reversearr.join('')
//         let reversenum = Number(reverseString)

//         let diff = Math.abs(reversenum - abc)

//         if(diff%k===0){
//             count++
//         }
//     }

//     return count ;


//     // Write your code here

// }
// let ans = beautifulDays(20,23,6)
// console.log(ans)

// let arr = [4, 3, 5, 1, 2]
// function permutationEquation(p) {
//     let ans = []
// for(let i = 1 ; i <= p.length;i++){
//     for(let j = 1;j <= p.length;j++){
        
//     }
// }
// // Write your code here
// }


// function permutationEquation(p) {
//     let result = [];
//     let a , y ;
//     for (let x = 1; x <= p.length; x++) {
//         for(let i = 0 ;  i < p.length ;i++){
//                 if(p[i]===x){
//                  a = i+1;
//                  break;
//         }
//         }
//         for(let j = 0 ; j < p.length ; j++){
//                 if(p[j]===a){
//                      y = j + 1
//                      break;
//                 }
               
//         }
//          result.push(y)
//     }

//     return result;
// }

// let ans = permutationEquation(arr);
// console.log(ans)

let arr = ['dkf','jac','fzox']
let result = []
for(let i = 0 ; i < arr.length ; i++){
    
    let ans = arr[i]
    let splitans = ans.split('');
    let sortedans = splitans.sort()
    let joined = sortedans.join('')
     
     result.push(joined)
   
   
}

for(let i = 0 ; i < arr.length; i++){
    
}
  console.log(result)

