// Higher order functions
function doTwice(fn){
    fn()
    fn()
}
doTwice(()=>{console.log('Hello')})
// javascript can take functions also as input 
// doTwice is a higher order because it takes a function  as an argument

// the arrow function is a callback as it is called by doTwice

function forEach(arr,callback){
    for(let i = 0 ; i < arr.length ; i++){
        callback(arr[i], i , arr) // call with elem
    }
}