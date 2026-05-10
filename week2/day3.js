// Build your own minimal Promise class. Don't look at how JS implements it — reason through it yourself first.
// It should support:
// .then(onFulfilled) — called when resolved
// .catch(onRejected) — called when rejected
// resolve(value) and reject(reason) passed to the executor function
// Start with this skeleton and fill it in:
class MyPromise {
  constructor(executor) {
    this.state = 'pending';
    this.value = undefined;
    this.callbacks = {
      onresolved:[],
      onrejected:[]

    };

    const resolve = (value) => {
      if(this.state !== 'pending') return; 
      this.state = 'fulfilled'
        this.value = value
        this.callbacks.onresolved.forEach((fn)=>fn(value))
        this.callbacks.onresolved=[];
        
    }
    

    const reject = (value) =>{
      if(this.state !== 'pending') return;
      this.state = 'rejected'
      this.value = value;
      this.callbacks.onrejected.forEach((fn)=>fn(value))
      this.callbacks.onrejected=[]

    }
    executor(resolve,reject)

    // call executor with resolve and reject
  }
  
  then(onFulfilled, onRejected) {
    // if(typeof onFulfilled !== 'function' || typeof onRejected !== 'function') return;
    
    if(this.state === 'fulfilled'){
      onFulfilled(this.value)
    }
    if(this.state === 'rejected'){
      onRejected(this.value)
    }
    if(this.state === 'pending'){
      this.callbacks.onresolved.push(onFulfilled)
      this.callbacks.onrejected.push(onRejected)
    }
    
    

    
    
    // store or call the callback
  }

  catch(onRejected) {
    return this.then(undefined,onRejected)
    // hint: .catch is just .then with no first argument
  }
}

const p = new MyPromise((resolve)=>{
  resolve('I guess its working')
})
p.then(v => console.log('v1',v))
p.then(v => console.log('v2',v))

