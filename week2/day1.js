// Async/await
// Part B- callbacks 

// function callback(fn,delay){
//     return function() {
//         setTimeout(fn,delay)
//     }
    
// }

// console.log(1)
// console.log(2)
// setTimeout(()=>console.log(4),100)
// console.log(5)
// console.log(6)

// part C - promises 
// A promise is an object representing a future value. It has three states.
// 1. pending - nott finished yet
// 2. fulfilled - completed successfully, has a value
// 3. Rejected - failed , has an error

// const promise = new Promise((resolve, reject)=>{
//     // Do some async work 
//     setTimeout(()=>{
//         const success = true;
//         if(success){
//             resolve('Data received!');
//         }
//         else{
//             reject('Something went wrong');
//         }
//     },1000)
// })

// promise
// .then(value => console.log(value))
// .catch(error => console.log(error))

// const promise = new Promise((resolve,reject)=>{
//     // let num = 247
//     // if(num%2==0){
//     //     resolve('Number is  Even ')
//     // }
//     // else{
//     //     reject('Number is odd')
//     // }
//     // setTimeout(() => resolve('done'),1000) successful resolve 
//     setTimeout(() => reject(('whoops!')),1000);
// })

// // promise.then(result => console.log(result))
// // .catch(error => console.log(error))

// console.log(promise)

// Experiments 
// console.log('1');

// Promise.resolve('promise result')
//   .then(val => console.log(val));

// console.log('3');

// // Experiment 2
// class MyPromise{
//     constructor(executor){
//         this.state = 'pending';
//         this.value = undefined;
//         this.handlers = [] //callbacks waiting for resolution
//     }

//     function resolve(value){

//     }
// }

// fetch('https://jsonplaceholder.typicode.com/users/1')
// .then(response => response.json())
// .then(user => console.log('user:',user.name,user.email))
// .catch(err => console.error('Error:',err))

// async function getUser(id) {
//     try{
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//         if(!response.ok) throw new Error(`HTTP ${response.status}`);
//         const user = await response.json();
//         console.log('User:',user.name,user.email);
//     }catch(err){
//         console.error('Error:',err)
//     }
// }
// getUser(1);
// getUser(2);

