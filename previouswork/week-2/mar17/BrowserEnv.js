// DOM (Document Object Model)
// The Document Object Model, or DOM for short, represents all page content as
// objects that can be modified

// the document object is the main 'entry point' to the page.
// We can change or create anything on the page using it

document.body.style.background = "red";
setTimeout(() => document.body.style.background = '',5000)

// Browser Object Model 
// represents additional objects provided by the browser(host enviornment)
console.log(navigator.platform)
console.log(navigator.userAgent)

// DOM tree 
// According to the Document Object Model(DOM), every HTML tage is an object 
// Nested tags are 'children' of the enclosing one. The text inside a tag is an object as well 


// all these objects are accessible using javascript, and we can use them to modify the page.

