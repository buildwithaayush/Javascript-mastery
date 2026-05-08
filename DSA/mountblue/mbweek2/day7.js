function equalizeArray(arr) {
    let map = new Map();
    for(let i = 0 ; i < arr.length ; i++){
        map.set(arr[i],(map.get(arr[i])|| 0)+1)
    }
    let max = -Infinity;
    for(let [key,value] of map){
       if(value > max){
        max = value
        
       }
    }
   

    return arr.length - max;
}


function minimumDistances(a) {
    let result = []
    for(let i = 0 ; i < a.length;i++){
        for(let j = i+1; j < a.length ; j++){
            if(a[i]==a[j]){
                let ans = j - i;
                result.push(ans)
            }
        }
    }
    if(result.length == 0){
        return -1;
    }

    let min = result[0]
    for(let i = 1; i < result.length ; i++){
        if(result[i] < min){
            min = result[i];
        }
    }

    return min;

}




let arr = [3,2,1,4,3]

let ans = minimumDistances(arr);
console.log(ans)




 