// count all digit of a number 
function digitsOfNumber(n){
    let count = 0;
    while(n!==0){
        count++
        n = Math.floor(n/10)
    }
    return count
}

let n = 2345678
let ans = digitsOfNumber(n)
console.log(ans)



