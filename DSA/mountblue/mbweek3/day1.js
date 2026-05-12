function theLoveLetterMystery(s) {
    let start = 0;
    let end = s.length-1;
    let count = 0
    while(start < end){
        let left = s.charCodeAt(start);
        let right = s.charCodeAt(end);
        count += Math.abs(left-right);

        start++;
        end--;
    }
    return count;
}

let s = 'abcbd';
let ans = theLoveLetterMystery(s);
console.log(ans)

function howManyGames(p, d, m, s) {
  

    
    return count;
    // Return the number of games you can buy
}

