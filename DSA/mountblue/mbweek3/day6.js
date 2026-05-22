// 18 may 2026
function pangrams(s) {
let newS = s.toLowerCase();
let ans = new Set();
for(let char of newS){
    if(char >='a' && char<='z')
    ans.add(char)
}
if(ans.size == 26){
    return 'pangram'
}
else{
    return 'not pangram'
}

}
let ans = pangrams('')

