function updateScreen(val) {
    var screen = document.getElementById("calculator-screen");
    screen.innerText = val;
}

var num1 = ""
var operator = ""
var num2 = ""
var operatorSet = false

function addNumber(val) {
    if (operatorSet == true){
        num2 += val
        updateScreen(num2)
    } else {
        num1 += val
        updateScreen(num1)
    }
    
}

function setOperator(val) {
    operator = val
    operatorSet = true
}

function calculate() {
    console.log(num1, operator, num2)
    var total = eval(num1 + operator + num2)
    console.log(total)
    updateScreen(total)
    clear()
}

function clear() {
    operatorSet = false
    num1 = ""
    num2 = ""
    operator = ""
}

updateScreen("0")