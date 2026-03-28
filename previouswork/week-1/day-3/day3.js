// //Logical operators
// // there are four logical operators in Javascript ||(OR), &&(AND), !(NOT) , ?? (Nullish Coalescing).
// // ||(OR) 
// if(1 || 0){
// console.log('truthy!');
// }

// let hour = 12;
// if(hour < 10 || hour > 18){
// console.log('The office is closed.')
// }

// let nhr = 12;
// let isWeekend = true;
// if(nhr < 10 || hour > 18 || isWeekend){
// console.log('The office is closed. its weekend.');
// }
// // 1. Getting the first truthy value from a list of variables of expressions.
// let fn = ''
// let ln = ''
// let nn = 'SuperCoder'
// console.log(fn || ln || nn || 'ayush')

// // 2. Short-circuit evaluation 
// //it means that || processes its arguments until the first truthy value is reached,
// //  and then the value is returned immediately, without even touching the other argument.

// true || console.log("not printed")
// false || console.log("printed")

// // &&(AND) Operator 
// // let result = a && b;
// // console.log(result)

// console.log( true && true)
// console.log( false && true)
// console.log( true && false)
// console.log( false && false)

// let hr = 12;
// let minute = 30;

// if(hour == 12 && minute == 30){
// console.log('The time is 12:30')
// }

// console.log(1 && 0); // AND returns the first falsy value. where OR returns first truthy value.

// console.log(null && 5) 

// console.log(1 && 2 && 3 && null && 4)
// console.log(1 && 2 && 3  && 4)

// // !(NOT)
// // The boolean Not operator is represented with an exclamation sign !.

// console.log(!true);

// // A double NOT !! is sometimes used for converting a value to boolean type:
// console.log(!!'non-empty string');
// console.log(!!null);

// if(age < 14 || age > 90){

// }
// if(!(age < 14 || age > 90)){
    
// }

let ans = prompt('who is there ?')
if(ans == null || ans == '' ){
alert('Cancelled')
}
else if(ans !== 'Admin'){
    alert('I dont know you')
}
else{
    let password = prompt('Password')
    if(password == null || password == ''){
        alert('Cancelled')
    }
    else if(password !== 'TheMaster'){
        alert('I dont know you')
    }
    else{
        alert('welcome!')
    }
}