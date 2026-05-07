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




function gridChallenge(grid) {
let result = []
for(let i = 0 ; i < grid.length ; i++){
    
    let ans = grid[i]
    let splitans = ans.split('');
    let sortedans = splitans.sort()
    let joined = sortedans.join('')
     
    result.push(joined)
    
}
for(let col = 0 ; col < result[0].length ; col++){
    for(let row = 0 ; row < result.length-1; row++){
    if(result[row][col]>result[row+1][col]){
    return 'NO';
    }
    }
}
   
   return 'YES'
}

function angryProfessor(k, a) {
    let count = 0 ;
    for(let i = 0 ; i < a.length; i++){
        if(a[i]<=0){
            count++;
        }
    }
    if(count >= k){
        return 'YES'
    }
    else{
        return 'NO'
    }

}

function squares(a, b) {
   let top = Math.ceil(Math.sqrt(a));
   let bottom = Math.floor(Math.sqrt(b))

   return bottom - top+1;

}

let arr = ['100','50','20','10']
// 
function bigSorting(unsorted) {
   unsorted.sort((a,b)=>{
    if(a.length !== b.length){
        return a.length - b.length;
    }
    return a.localeCompare(b);
   })

}

bigSorting(arr);