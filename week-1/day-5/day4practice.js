// YOUR PRACTICE:
// 1. Print multiplication table of 7 (7x1 to 7x10)
// 2. Sum all numbers in array [5, 10, 15, 20, 25]
// 3. Find largest number in [34, 78, 12, 95, 43]

// for (let i = 1; i <= 10 ; i ++ ){
// console.log(`7 * ${i} = ${7 * i}`)
// }

let arr = [5, 10, 15, 20, 25];
// console.log(arr.length)
// for(let abc of arr){
//     console.log(abc); // for ... of loop(modern way)
// }
// let sum = 0; 
// for(let i = 0 ; i < arr.length ; i++){
//     sum += arr[i]
// }
// console.log(sum);

// let largest = arr[0]
// for(let i = 1; i < arr.length;i++){
//     if(arr[i] > largest){
//         largest = arr[i]
        
//     }
   
   
// }
//  console.log(largest)

// for (let i = 0 ; i < 3; i++){
//     let row = " "
//     for(let j = 0; j < 5 ; j++){
//         row += '* '
//         row += '^ '
//     }
//     console.log(row)
// }


// for (let row = 0 ; row  < 5 ; row++ ){
//    let line = ''
//     for(let col = 0 ; col <=row ; col ++){
//       line += '* '
//     }
//    console.log(line)
   
// }
// for (let row = 5 ; row  > 0 ; row-- ){
//    let line = ''
//     for(let col = 1 ; col <=row ; col ++){
//       line += '* '
//     }
//    console.log(line)
   
// }

// 2. Create number pyramid:
//    1
//    1 2
//    1 2 3
//    1 2 3 4
//    1 2 3 4 5

// for (let i = 1 ; i <=5; i++){
//     let line = ''
//     for(let j = 1; j <=i; j++ ){
//        line += j+' '
//     }
//     console.log(line);
// }

// 1. Print numbers 1-20, skip multiples of 3
// let line = ''
// for(let i = 0 ; i < 20 ; i++){
    
//     if(i%3==0){
//         continue;
//     }
//     line += i + ' '
    
// }
// console.log(line);
// 2. Find first number divisible by 7 in range 50-100
let ans = 0
for(let i = 50; i < 100; i++){
    if(i%7==0){
        ans = i;
        break;
    }
}
console.log(ans);