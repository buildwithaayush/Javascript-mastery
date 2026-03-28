// function outer() {
//   let count = 0;
//   function inner() {
//     count++;
//     console.log(count);
//   }
//   return inner;
// }

// const counter = outer();
// counter(); // ?
// counter(); // ?
// counter(); // ?
// // WHY does count persist? outer() already returned!

function makeCounter() {
  let count = 0;
  return function() { return ++count; };
}

const counterA = makeCounter();
const counterB = makeCounter();
console.log(counterA()); // 0
console.log(counterA()); // 1
console.log(counterB()); // 2
// Are counterA and counterB sharing the same count?

