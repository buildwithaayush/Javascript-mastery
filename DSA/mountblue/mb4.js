// let candles = [3,2,3,3,3,3,2,2,1]
// function candle(candles){
// let map = new Map()
// for(let i = 0 ;  i < candles.length ; i++){
// map.set(candles[i],(map.get(candles[i])||0)+1)
// }
// let max = Number.MIN_VALUE;


//     for(const [key,value]of map){
//         if(value > max){
//             max = value;
            
//         }
//     }

// return max;
// }

// let ans = candle(candles);
// console.log(ans)

function grades(grades){
    let ans = [];
    
for(let i = 0; i< grades.length; i++){
    let remainder = grades[i]%5;
    let diff = 5 - remainder;
    if(grades[i] < 38){
        ans.push(grades[i])
    }
    else if(diff < 3){
        ans.push(grades[i]+diff)
    }
    else{
        ans.push(grades[i])
    }
}
return ans;
}
