//calculator

const calculatorDisplay  = document.querySelector('#calc-display');

function addToDisplay(character) {
    calculatorDisplay.value += character;
}

function calculate() {
    try {
        calculatorDisplay.value = eval(calculatorDisplay.value)
    } catch (error) {
        calculatorDisplay.value = "Syntax Error!"
    }
}

function clearDisplay() {
    calculatorDisplay.value = "";
}