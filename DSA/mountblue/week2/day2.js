// function MilitaryTime(s){
//     let checkAMPM = s.slice(-2)
//     let hours = Number(s.slice(0,2))
//     let remaining = s.slice(2,-2)
//     if(checkAMPM === 'AM' && hours === 12){
//         hours = 0;
//         return `${String(hours).padStart(2,'0')}${remaining}`

//     }
//     else if(checkAMPM === 'PM' && hours !== 12){
//         hours = hours +12;
//     }
    
        
//          return `${String(hours).padStart(2,'0')}${remaining}`
    

// }

// let s = '07:23:55AM'
// let ans = MilitaryTime(s)
// console.log(ans)

function cipher(s,k){
    let exp = /[a-z]/g
    for(let i = 0 ; i < s.length ; i++){
        if(exp.includes(s[i])){
            
        }
    }
    
}