let currentInput = '';
let operator = '';
let resultDisplayed = false;


function appendNumber(number) {
    if (resultDisplayed) {
        currentInput = '' + number;
        resultDisplayed = false;
    } else {
        currentInput += number;
    }
    updateScreen();
}


function updateScreen() {
    document.getElementById('result').value = currentInput || '0';
}


function operation(op) {
    if (currentInput !== '') {
        operator = op;
        currentInput += operator;
        resultDisplayed = false;
        updateScreen();
    }
}


function calculate() {
    try {
        let result = eval(currentInput);
        currentInput = result.toString();
        resultDisplayed = true;
        updateScreen();
    } catch (error) {
        currentInput = 'Error';
        resultDisplayed = true;
        updateScreen();
    }
}


function clearScreen() {
    currentInput = '';
    operator = '';
    resultDisplayed = false;
    updateScreen();
}
