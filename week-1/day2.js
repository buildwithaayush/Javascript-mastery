
// alert("hello budds")
    // numbers cannot represent more that 2^54 -1 
    //// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;
// strings 
let str = "ayush";
let str2 = 'even single qoutes are also good';
let phrase = `we welcome you ${str}`

// Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.

// Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:

let ag = null;
//null data type means nothing, empty.

let num;
console.log(num)
// type of returns the type of operands 
console.log(typeof "0")

// alerts 
// alert is a modal window which shows a notification.

//prompts 
// prompts are modal window which accepts two arguments and where we can give back data also in input fields
let age = prompt('how old are you?')
alert(`you are ${age} old`)

// confirm
// confirm is also a modal window which ask a boolean question and results in either a true or false. 
let isBoss = confirm('are you boss?')
alert(isBoss)
// We covered 3 browser-specific functions to interact with visitors:

// alert
// shows a message.
// prompt
// shows a message asking the user to input text. It returns the text or, if Cancel button or Esc is clicked, null.
// confirm
// shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc.