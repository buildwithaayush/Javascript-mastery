// Day 2.5 closure mastery day 
// Experiment 4 closures in loop
// function makeCallbacks() {
//   const callbacks = [];
//   for (var i = 0; i < 3; i++) {
//     callbacks.push(function() { console.log(i); });
//   }
//   return callbacks;
// }
// let abc = makeCallbacks();
// abc.forEach(fn => fn())

// so lets start very basic that var is function scoped and let is block scoped so here when the makecallbacks func start so i is only one variable
// that is getting update when i = 0 an anonymous function get pushed in the callbacks array and the function can look at the variable is called lexical scoping 
// and when we call abc . funct inside a abc remembers the value of i is called closures. 

// IIfE (immideate invoked function expression )
// function makecallbacks(){
//     const callbacks = []
//     for(var i = 0 ; i < 3; i++){
//         (function(captureI){
//             callbacks.push(function(){console.log(captureI)})
//         })(i)        
//     }
//     return callbacks
// }
// let abc = makecallbacks()
// abc.forEach(fn => fn())

// function makeCallbacks(){
//     const callbacks = []
//     for(let i = 0 ; i < 3 ; i++){
//         callbacks.push(()=>{console.log(i)})
//     }
//     return callbacks;
// }
//     let abc = makeCallbacks()
//  abc.forEach(fn => fn())

// function createTimer() {
//   let seconds = 0;
//   const display = () => console.log("Seconds:", seconds);
//   setInterval(() => { seconds++; }, 1000);
//   return { display };
// }

// const timer = createTimer();
// setTimeout(() => timer.display(), 5000);

// function memoize(fn){
//     const cache = {}

//     return function(n){
//         for(let element in cache){
//             if(n in cache){
//                 return cache[n]
//             }
//             else{
//                 let ans = fn(n);
//                 cache[n] = ans
//                 return ans
//             }
//         }
        
//     }

// }

// function makeMultipliers() {
//   const multipliers = [];
//   for (var i = 1; i <= 4; i++) {
//     multipliers.push(function(x) { return x * i; });
//   }
//   return multipliers;
// }

// let test = makeMultipliers();
// test.forEach(fn => console.log(fn(3)))

// let timer = setTimeout(()=>{console.log('hello')},1000)

// clearTimeout(timer)
// let msg = setTimeout(()=>{console.log('timer is cancelled')},1000)
// function debounce(fn, delay) {
//   // What do I need to remember between calls?
//   // A timer ID. So I can cancel it.
//   let timeoutId;

//   return function(...args) {
//     // Step 1: Cancel any existing timer
//     clearTimeout(timeoutId);

//     // Step 2: Start a new timer
//     timeoutId = setTimeout(() => {
//       fn(...args); // Call the actual function after delay
//     }, delay);
//   };
// }

