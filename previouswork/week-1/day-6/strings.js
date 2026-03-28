// Strings
let guest = `Guests: 
* ayush
* Pete
* Mary`
console.log(guest);

let guestnewline = 'Hello\nworld'
console.log(guestnewline)
console.log('the backslash: \\')
console.log('isn\'t it')

// str.length() doesn't work here . in js str.length works. and it is a numeric property.
// let str = 'we Hello buds we are here'
// console.log(str[0]);
// console.log(str.at(0))

// // last char
// console.log(str[str.length-1])
// console.log(str.at(-1))

// for(let char of str){ // for of loop gives the element 
//     console.log(char)
// }

// for(let char in str){// for in loop gives indexes of the element
//     console.log(char)
// }


// searching for a substring
// console.log(str.indexOf('we'))
// console.log(str.indexOf('We'))

// let target = 'we';
// let pos = 0;
// while(true){
//     let foundPos = str.indexOf(target, pos)
//     if(foundPos == -1) break;

//     console.log(`Found at ${foundPos}`)
//     pos = foundPos + 1;
// }

// let str = ['Widget','fidget','creget','cricket']
// let ans = str.filter( current => current.endsWith('get'))
// console.log(ans)
// console.log(str.startsWith('Wid'))
// console.log(str.startsWith('wid'))
// console.log(str.endsWith('get'))

// Getting a substring 
// let str = 'stringify'
// console.log(str.slice(1,4)) // starting index 't' of array to be included but end would be exlcluded 'n'
// console.log(str.slice(1))// if not given second argument then slice will go till end 
// negative values for start and end in slice are also possible. They mean the position is counted from the string end.
// console.log(str.slice(-4,-1))
// // str.substring()
// console.log(str.substring(2,6))

// comparing strings

let str = 'hello world'
// console.log(str.split(' '))
// console.log(str.trim())

let text = 'I like cats. cats are great';
console.log(text.replace('cats','dogs'))
console.log(text.replaceAll('cats','dogs'))









