let n1 = null;
let n2 = null;
let operator;

function operate(n1, n2, operator){
    switch(operator){
        case "+":
            return Number(n1) + Number(n2);
        case "-":
            return n1 - n2;
        case "*":
            return n1 * n2;
        case "/":
            return n1 / n2;
        default:
            console.log("default");
    }
}

const display = document.getElementById("display");
const number = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal").addEventListener("click", operatorEqual);
const clearButton = document.getElementById("clearButton").addEventListener("click", resetData);

function operatorEqual(e){
    console.log(e.srcElement.id);
    let result = operate(n1, n2, operator);
    display.innerText = result;
}

operators.forEach((btn) => {
    btn.addEventListener("click", operatorClicked);
})

function operatorClicked(e){
    display.innerText = e.srcElement.id;
    operator = e.srcElement.id;
}

number.forEach((btn) => {
    btn.addEventListener("click", numberClicked);
})

function numberClicked(e){
    display.innerText = e.srcElement.id;
    if(operator == undefined){
        n1 = e.srcElement.id;
    }else if(operator != undefined){
        n2 = e.srcElement.id;
    }
}

function resetData(){
    n1 = null;
    n2 = null;
    operator = undefined;
    display.innerText = "";
}