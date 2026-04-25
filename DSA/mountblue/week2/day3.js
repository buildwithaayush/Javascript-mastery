// caesar cipher problem 
function caesarCipher(s,k){
    let result = '';

    for(let char of s){
    let code = char.charCodeAt(0);
    let shifted = (code - 97 + k)%26 + 97
    result += String.fromCharCode(shifted)
    }
    return result;
}

