let n1 = 3;
let n2 = 2;
let operator;

function operate(n1, n2, operator){
    switch(operator){
        case "+":
            return n1 + n2;
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
const clearButton = document.getElementById("clearButton");

function operatorEqual(e){
    console.log(e.srcElement.id);
    let result = operate(n1, n2, operator);
    display.innerText = result;
}

operators.forEach((btn) => {
    btn.addEventListener("click", operatorClicked);
})

function operatorClicked(e){
    console.log(e.srcElement.id); //test
    display.innerText = e.srcElement.id;
    operator = e.srcElement.id;}

number.forEach((btn) => {
    btn.addEventListener("click", numberClicked);
})

function numberClicked(e){
    console.log(e.srcElement.id); //test
    display.innerText = e.srcElement.id;
    n1 = e.srcElement.id;
}
