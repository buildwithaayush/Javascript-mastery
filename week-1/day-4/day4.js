// Nullish Coalescing operator ?? 
let a ;
let b = 'b'
console.log(a ?? b)
// || returns the first truthy value where as ?? returns 
// the first defined value.

let height = null;
let width = null;

let area = (height ?? 100) * (width ?? 50);
//The nullish coalescing operator ?? provides a short way to choose the first “defined” value from a list.

// while 
// let value = 1;
// while(value <= 5){
// console.log("Good Morning")
// value++;
// } 


// do while 
// let v = 5;
// do{
//     console.log('ICC')
//     v--;
// }while(v >= 1)

// For 
// for(let i = 1; i < 2 ; i++){
//   
//     console.log(i + '')
   
// }

// Break 
// let s = 0 ;
// while (true) {
   
//     if(s == 5){
//         break;
//     }
//     console.log(s);
//     s++
// }


// continue 
// let s = 1;
// while (s < 100) {
//    s++
//     if(s % 5 == 0){
//        continue;
//     }
//     console.log(s);
    
// }
let i = 0 

0,1,2,3,4
1,2,3,4
// for(let i = 0 ; i < 5 ; i++){
//     console.log(i)
// }
// for(let i = 0 ; i < 5 ; ++i){
//     console.log(i)
// }

// for(let i = 0 ; i < 11; i++){
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }

// let va = 0
// while(va < 3){
//     console.log(va)
//     va++;
// }

// let va = 10;
// while(va > 0){
// console.log(va);
// va--;
// }

let va = 5 ;
let f = 1;
while(va > 0){
f *= va;
va--;
}
console.log(f);