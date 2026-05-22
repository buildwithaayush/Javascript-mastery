// 22 may 2026
// Beautiful triplet 
function beautifulTriplets(d, arr) {
    let map = new Map();
    let count = 0;
for(let i = 0 ; i< arr.length ; i++){
    map.set(arr[i],(map.get(arr[i])||0)+1)
}

for(let i = 0 ; i< arr.length; i++){
    if(map.has(arr[i]-d) && (map.has(arr[i]+d))){
        let increaseVal = map.get(arr[i]-d) * map.get(arr[i]+d)
        count += increaseVal
    }
}

return count;

}

let ar = [1,2,4,5,7,10];
let k = 3;
let ans = beautifulTriplets(k,ar);
console.log(ans)

function pickingNumbers(a) {
    let now = 0;
    let best = 0;
    for(let i = 1 ; i < arr.length;i++){
        if(arr[i]-arr[i-1] <= 1){
            now++;
        }
        else{
            if(best < now){
                best = now;
                now = 0; 
            }
        }
    }

    return best;

}