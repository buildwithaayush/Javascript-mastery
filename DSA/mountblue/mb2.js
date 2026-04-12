// function pattern(n){
//     let ans ;
//     for(let i =0;i < n;i++){
//         ans = ''
//         for(let j = 0; j < n - i -1;  j++){
//            ans += ' '
//         }
//         for(let j = 0 ; j < i+1 ;j++){
//             ans+= '*'
//         }
//         console.log(ans)
//     }
   
// }
// pattern(4)

// let a = [1,2,3]
// let b = [3,2,1]
// function points(a,b){
//     let alice = 0 , bob = 0;
//     for(let i = 0 ; i < a.length; i++){
//         if(a[i]>b[i]){
//             alice++
//         }
//         if(b[i]>a[i]){
//             bob++
//         }
//         if(a[i]=b[i]){
//             continue;
//         }
       
//     }

//     return[alice,bob]

// }
// let ans = points(a,b);
// console.log(ans)

let arr = [5,7,4,3,8]
function hulahula(arr){
let p = arr[0];
let left = []
let equal = []
let right = []
for(let i = 0 ; i<arr.length; i++){
    if(arr[i]>p){
        right.push(arr[i])
    }
    if(arr[i]<p){
        left.push(arr[i])
    }
    if(arr[i]==p){
        equal.push(arr[i])
    }
}
 return [...left,...equal,...right]
}

console.log(hulahula(arr))
