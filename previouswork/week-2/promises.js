// the constructor syntax for a promise object 
let promise = new Promise(function(resolve,reject){
   setTimeout(() => resolve('done'),5000);
})

// function(resolve,reject){ this is called executor 
    
// }