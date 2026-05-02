function checkObject(){
    let para = document.createElement('p');
    para.innerText='checkObject is working mate'
    document.body.appendChild(para)
}

const btn = document.getElementById('btn');
btn.addEventListener('click' , checkObject);
