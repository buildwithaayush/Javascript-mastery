// function gameOfStones(n) {
//          if(n==0||n==1){
//             return 'Second'
//          }

// }

// function marcsCakewalk(calorie) {
//     let ans = 0;
//     let sortedCal = calorie.sort((a,b)=> b - a)
//     console.log(sortedCal)
//    for(let i = 0 ; i < sortedCal.length; i++){
//         ans += (2**i)*calorie[i];
//    }

//    return ans;

// }

// let ans = marcsCakewalk([5,10,7])
// console.log(ans)

function catAndMouse(x, y, z) {
let distance1 = Math.abs(z -x);
let distance2 = Math.abs(z-y);
if(distance1 === distance2){
    return 'Mouse C'
}

else if(distance1 < distance2){
    return 'Cat A'
}
else{
    return 'Cat B'
}

}