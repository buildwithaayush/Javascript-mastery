function migratoryBirds(arr) {
    let map = new Map();
   
    for(let i = 0 ; i < arr.length ; i++){
        map.set(arr[i],(map.get(arr[i])|| 0)+1)
    }
   
    let maxFreq = -Infinity;
    let bestId = Infinity;

    for(let [key,value] of map){
        if(value > maxFreq){
            maxFreq = value;
            bestId = key
        }
        else if(value === maxFreq){
            if(key < bestId){
                bestId = key
            }
        }
            
            
    }
    return bestId;
    }

    


function birthdayCakeCandles(candles) {
    // Write your code here
    let count = 0;
    let max = candles[0 ];
    for(let i = 0 ; i < candles.length ; i++){
        if(arr[i]>max){
            max = arr[i];
            count = 1;
        }
        else if(arr[i]===max){
            count++;
        }
    }
    return count;

}

let candles = [4,5,5,5,3,3,2,1]
let ans = birthdayCakeCandles(candles);
console.log(ans)