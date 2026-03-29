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

// function makeCounter() {
//   let count = 0;
//   return function() { return ++count; };
// }

// const counterA = makeCounter();
// const counterB = makeCounter();
// console.log(counterA()); // 0
// console.log(counterA()); // 1
// console.log(counterB()); // 2
// // Are counterA and counterB sharing the same count?

// function makeCallbacks() {
//   const callbacks = [];
//   for (var i = 0; i < 3; i++) {
//     callbacks.push(function() { console.log(i); });
//   }
//   return callbacks;
// }

// const cbs = makeCallbacks();
// cbs[0](); // 0
// cbs[1](); // 1
// cbs[2](); // 2
// NOW explain: each callback "closes over" the SAME variable i.
// There's only ONE i (because var), and it's 3 when callbacks run

// function createBankAccount(initialBalance) {
//   let balance = initialBalance; // PRIVATE — no one can access directly
  
//   return {
//     deposit(amount) { balance += amount; return balance; },
//     withdraw(amount) {
//       if (amount > balance) return "Insufficient funds";
//       balance -= amount;
//       return balance;
//     },
//     getBalance() { return balance; }
//   };
// }

// const account = createBankAccount(100);
// console.log(account.deposit(50));    // 150
// console.log(account.withdraw(30));   // 120
// console.log(account.balance);        //  no
// // WHY is balance private? Because it's not on the returned object.
// // It only exists in the closure.


function createTimer() {
  let seconds = 0;
  
  const display = () => console.log("Seconds:", seconds);
  
  setInterval(() => { seconds++; }, 1000);
  
  return { display };
}

const timer = createTimer();
setTimeout(() => timer.display(), 3000);
// What does it print? Is it 0 or 3? 0 because when the first time function starts display value is zeor and it is returned. 
// then if the value keep getting change that doesn't matter. 
// Hint: display() closes over seconds — the VARIABLE, not the VALUE.
function makeMultipliers() {
  const multipliers = [];
  for (let i = 1; i <= 4; i++) {
    multipliers.push(function(x) { return x * i; });
  }
  return multipliers;
}

const m = makeMultipliers();
console.log(m[0](10)); // ?
console.log(m[1](10)); // ?
console.log(m[2](10)); // ?
console.log(m[3](10)); // ?
// This uses let — so each iteration gets its own i.
// Now change let to var. What changes? WHY?

function debounce(fn, delay) {
  let timeoutId; // closed over — persists between calls
  return function(...args) {
    clearTimeout(timeoutId); // cancel previous timer
    timeoutId = setTimeout(() => fn(...args), delay); // start new timer
  };
}

// Simulating rapid calls
const log = debounce((msg) => console.log("FIRED:", msg), 500);
log("a"); // starts 500ms timer
log("b"); // cancels previous, starts new 500ms timer
log("c"); // cancels previous, starts new 500ms timer
// Only "FIRED: c" prints — 500ms after the last call
// WHY? Because timeoutId persists in the closure.

// Create a createTodoList() function that returns an object with methods
// Methods: addTodo(text), removeTodo(id), toggleTodo(id), getTodos(), getStats()
function createTodoList(){
  
  return {
  addTodo(text){
    return text
  },
  removeTodo(id){

  },
  toggleTodo(id){

  },
  getTodos(){

  },
  getStats(){

  }

}
}
