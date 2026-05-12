//  I am building a Mypromise class 

class Mypromise{
    constructor(executor){
        this.state = 'pending';
        this.value = undefined;
        this.callbacks = {
            onResolved : [],
            onRejected : []
        }
        const resolve = (value)=>{
            if(this.state !== 'pending') return;
            this.state = 'fulfilled'
            this.value = value
            this.callbacks.onResolved.forEach((fn)=>{
                if(typeof fn == 'function') fn(this.value)
             })
            this.callbacks.onResolved = []
            
        }

        const reject = (value) => {
            if(this.state !== 'pending') return;
            this.state = 'rejected';
            this.value = value
             this.callbacks.onRejected.forEach((fn)=>{
                if(typeof fn == 'function') fn(this.value)
             })
            this.callbacks.onRejected = []
        }

        executor(resolve,reject)

    }
then(onfullfilled, onRejection){
    return new Mypromise((resolve,reject) => {
        
    })

  if (this.state === 'resolved') {
    if (typeof onfullfilled === 'function') {
      onfullfilled(this.value);
    }
  } else if (this.state === 'rejected') {
    if (typeof onRejection === 'function') {
      onRejection(this.value);
    }
  } else {
    this.callbacks.onResolved.push(onfullfilled);
    this.callbacks.onRejected.push(onRejection);
  }
}
     catch(onRejected){
        return this.then(undefined,onRejected)
     }
}