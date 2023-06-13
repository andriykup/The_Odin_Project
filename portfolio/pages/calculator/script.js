let n1 = 3;
let n2 = 2;
let operator = "*";

function operate(n1, n2, operator){
    switch(operator){
        case "+":
            return n1 + n2;
            break;
        case "-":
            return n1 - n2;
            break;
        case "*":
            return n1 * n2;
            break;
        case "/":
            return n1 / n2;
            break;
        default:
            console.log("default");
    }
}

console.log(operate(n1, n2, operator));