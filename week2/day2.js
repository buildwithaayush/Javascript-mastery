// eventListners 

// function sayHello(){
//     let body = document.body;
//     let p = document.createElement('p');
//     p.textContent = 'Hello'
//     body.appendChild(p)
// }

// const btn = document.querySelector("button");

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// function changeBackground() {
//   const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// }

// btn.addEventListener("click", changeBackground); 
// btn.addEventListener('click',sayHello)

// callback 

function step1(init , callback){
    const result = init + 1;
    callback(result)
}
function step2(init , callback){
    const result = init + 2;
    callback(result)
}
function step3(init , callback){
    const result = init + 3;
    callback(result)
}

function doOperation(){
    step1(2,(result1)=>{
        step2(result1,(result2)=>{
            step3(result2,(result3)=>{
                console.log(result3)
            })
        })
    })
}

doOperation()