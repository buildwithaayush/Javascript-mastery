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