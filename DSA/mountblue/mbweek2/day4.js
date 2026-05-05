// function getMoneySpent(keyboards, drives, b) {
//    let ans = []
//    for(let i = 0 ; i < keyboards.length ; i++){
//     for(let j = 0; j < drives.length ; j++){
//         let value = keyboards[i]+drives[j];
//         if(value <= b)  ans.push(value)
       
//     }
//    }
//    if(ans.length === 0) return -1

//    let max = ans[0];
//    for(let i = 1;  i < ans.length ; i++){
//     if(ans[i] > max){
//         max = ans[i];
//     }
//    }
//    return max;

// }


// function camelcase(s) {
//     let count = 0 
//     for(let char of s){
//         if(char >= 'A' && char <= 'Z') count++;
//     }
    
//     return count+1;

// }

// function viralAdvertising(n) {
//     // Write your code here
//     let day = 1;
//    let shared = 5;
//    let totalliked =0;
//    while(day <= n){
//    let liked = Math.floor(shared/2)
//     totalliked += liked;
//     shared = liked * 3
//     day++;
// }
// return totalliked
// }

function jumpingOnClouds(c, k) {
let energy = 100;
let index = 0;

do{
 index = (index + k )% c.length;
if(c[index]==0){
    energy--;
}
else{
    energy-=3;
}
index+k;
}while(index !== 0)

return energy
}

let ans = jumpingOnClouds([0,0,1,0],2)
console.log(ans)
