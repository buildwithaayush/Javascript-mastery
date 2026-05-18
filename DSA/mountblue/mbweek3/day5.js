// 17 MAY 2026
function alternatingCharacters(s) {
    let count = 0;
   for(let i = 1 ; i < s.length; i++){
    if(s[i-1] === s[i]){
        count++;
    }
   }
   return count;

}
let k = 'bbbbbb'
let ans = alternatingCharacters(k)
console.log(ans)