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


async function getData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1'
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Response status: ${response.status}`)
        }

         const result = await response.json();
         console.log(result)
    }
    catch(error){
        console.log(error.message)
    }
}

let ans = getData();
console.log(ans)