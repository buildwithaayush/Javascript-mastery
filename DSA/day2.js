// let s = 'ayush'
// console.log(s.length)

// frequency counting 
let map = new Map();

// build counts from s
let count = 0;
for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
    count++
}

// subtract counts from t
for (let i = 0; i < t.length; i++) {
    
    // what should you check here?
    // what should you subtract?
}

if(count == 0 ){
    return true;
}
else{
    return false;
}
