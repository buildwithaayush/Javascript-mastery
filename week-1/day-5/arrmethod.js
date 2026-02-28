// Array methods
//delete
// let arr = ['i','go','home']
// console.log(arr.length)
// console.log(arr)

// delete arr[1]
// console.log(arr.length)
// console.log(arr)

// splice
// arr.splice(1,2) // starting to remove from index 1 and remove 2 element
// console.log(arr)

// arr.splice(0,3,'this', 'is' , 'a' , 'new', 'arr')
// console.log(arr)

// // The splice method is also able to insert the elements without any removals.
// // for that we need to set deletecount to 0
// arr.splice(0,0,'good','morning')
// console.log(arr)

// Negative indexes allowed
// arr.splice(-1,0,'will')// from index -1 (one step from the end)
// console.log(arr)

// slice
// arr.slice([start],[end])
// it returns a new array copying to it all items from index start to end .
// console.log(arr.slice(1,3));
// let arr = ['t','e','s','t'];
// console.log(arr.slice(1,3))

//concat
// the method arr.concat creates a new array that includes values from other arrays and additional items

// arr.concat(arg1,arg2)
//  let arr = [1,2]
// //  let nrr = [3,4]

// let arrLike = {
//     0:'something',
//     length: 1
// }
//   console.log( arr.concat(arrLike))

// Iterate: forEach
// forEach method allows to run a function for every element of the array.

// arr.forEach(function(item,index,array){

// })

// let arr = ['Bilbo','Gandalf','Nazgul'];
// // arr.forEach(element => {
// //     console.log(`hello ${element}`)
// // })
// arr.forEach((item,index,array)=>{
//     console.log(`${item} is at index ${index} in ${array}`)
// })

// Searching in array
// The methods arr.indexOf and arr.includes have
// the similar syntax and do essentially the same as their string counterparts,
//  but operate on items instead of charcters:

// arr.indexOf(item,from) - looks for item starting from index from , areturns true if found.

// let arr = [1, 2, 3, 4, 5, 6, 7, 99];
// console.log(arr.ncluds(90, 0))

// lastindexOf looks from right to left . 
// let fruits = ['apple', 'orange','banana']

// let arr = [2,7,1]
// arr.sort()
// console.log(arr)

// let arr = [5,6,2,3]
// arr.reverse()
// console.log(arr)

// split and Join 
// let names = 'ayush,vishal,paaji';
// let arr = names.split(' , ');
// console.log(arr)
// for(let name of arr){
//     console.log(`A message to ${name}`)
// }

// let arr = 'test'
// arr.split('')
// console.log(arr.split(''))

// let arr = ['ayush','vishal','paaji']
// console.log(arr.join(' '))

// reduce/reduceRight 
// let arr = [2,3]
// let value = arr.reduce((sum , current  )=> sum + current , 5)
// console.log(value);