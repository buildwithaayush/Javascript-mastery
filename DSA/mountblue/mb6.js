// counting valley 
// let text = 'UDDDUDUU'

// function countingValley(text){
//     let count = 0;
//     let spliited = text.split('')
//     for(let i = 0; i < spliited.length ; i++){
//         if(spliited[i]=='U'){
//             count++;
//         }
//         else{
//             count--
//         }
//     }
//     if(count < 0) return count*-1;
//     return count;

// }

// let ans = countingValley(text)
// console.log(ans)

// Library fine 
function libraryFine(d1, m1, y1, d2, m2, y2) {
    let yearGap = y1-y2;
    let monthGap = m1-m2;
    let dayGap = d1-d2;
    if(yearGap <= 0 && monthGap <= 0 && dayGap <= 0){
        return 0
    }
    if(yearGap > 0){
        return yearGap * 10000;
    }
    if(monthGap > 0){
        return monthGap * 500
    }
    if(dayGap > 0){
        return dayGap * 15
    }

    return 0;
    
   

}

let ans = libraryFine(10,4,2015,5,3,2015);
console.log(ans)