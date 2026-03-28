// let test = ['hello','seema','archer','t20']
// let ans = test.indexOf('hello')
// console.log(ans)
// if(ans >= 0){
// test.splice(ans,1)
// }

// console.log(test)

// let str = 'Race Car'
// console.log(str.toLowerCase().split(" ").join(''))

// let test = 'heLLo w%$orld 123'
// let ans = test.toLowerCase().replace(/[^a-z0-9 ]/gi,'').replaceAll(' ','-')
// console.log(ans)
// let email = 'john.doe@example.com'
// let userName = email.split('@')[0]
// let mask = userName.replace(userName.slice(1,userName.length-1),'***')
// console.log(mask)

// let str =  "I love #javascript and #coding!"

// console.log(str.split('#'))
// console.log(str.slice(0,str.length-1))

// let str = 'blailablaela'
// let vowel = 'aeiou'
// let count = 0
// // console.log(str.split(''))
// let splitted = str.split('')
// for(const char of splitted){
//     if(vowel.includes(char)){
//         count++;
//     }
// }
// console.log(count)

// let nums = 9119
// let ans = '';
// let splited = nums.toString().split('').map(Number)
// for(let num of splited){
//     let temp = num**2
//     ans += temp.toString()
// }
// console.log(ans)

// let person = {
//     name: 'ayush',
//     age: 23,
//     profession: 'software Engineering',
//     experience: 1,
//     techstack: 'React + Express',
//     extras: ['problem-solving','docker','cloud']

// }

// console.log(Object.keys(person))
// console.log(Object.values(person))
// let ans = Object.entries(person)
// let fAns = ans.filter(conditionFn)
// console.log(Object.fromEntries(person))

let str = 'ab'
// console.log(//str++ // str+1)
console.log(String.fromCharCode(str.charCodeAt(1)+1))