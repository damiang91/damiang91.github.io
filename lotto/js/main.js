'use strict'
let ballsLotto = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49]
let result = [];
const globalBody = document.body;
const ballsAll =() => {
    for( let i=0; i<ballsLotto.length; i++){
        const header = document.querySelector("header");
        let span = document.createElement("span");
        for(let j=0; j<result.length; j++){
            if(ballsLotto[i] === result[j]){
                console.log(ballsLotto[i]);
                span.setAttribute("class", "pileczka2");
            }
    else {
          span.setAttribute("class", "pileczka");
        }
        span.textContent=ballsLotto[i];
        header.appendChild(span); 
    }
    
}
}
       

const randomize = () =>{

    if (result.length === 6) {
        ballsAll();
        return;
    }
    let number = Math.floor(Math.random() * 49 +1);
    for(let i=0;i<result.length; i++){
        if (number === result[i] || number === (result[i] + 1) || number === (result[i] - 1))
        return randomize();
    }
    
    let div = document.createElement("div");
    
    div.textContent=number;
    div.setAttribute("class", "randomBall");
    globalBody.appendChild(div);
    result.push(number);
    
}
let count=0;
const rem = () => {
    if(count===5) {result=[];
    }
    let deleteElement = document.querySelector("div")
    globalBody.removeChild(deleteElement); 
    if (count < 5)
    count++;
    else 
    count=0;
    
}

const remAll = ()=> {
    result=[];
    for(let i=0; i<6; i++){
        let deleteElement = document.querySelector("div")
        globalBody.removeChild(deleteElement); 
    }
}

const button = document.querySelector("button");
button.addEventListener("click", randomize);
const buttonRed = document.querySelector(".btn-r");
buttonRed.addEventListener("click", rem );
const buttonAll = document.querySelector(".btn-all");
buttonAll.addEventListener("click", remAll)

