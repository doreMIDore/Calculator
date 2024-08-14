const selectorLeftContainer = document.querySelector("#left-container");
const resultEl = document.querySelector("output");
const selectorRightContainer = document.querySelector("#right-container");
const arrayButtons = [];

const leftContainer = Array.from(Array(10).keys());
leftContainer.push(0);
leftContainer.push("C");
leftContainer.shift();

const symbols = ["*", "/", "-", "+", "="];

class Result {
    constructor() {
        this.result = '';
    }

    setResult(newResult) {
        this.result += newResult;
        resultEl.textContent += newResult;
    }
    
    reset() {
        this.result = '';
        resultEl.textContent = this.result;
        operandA = null;
        operandB = null;
        currentOperator = null;
        isNegativeAllowed = true;
    }
}

class Button {
    constructor() {
        this.name = ""
    }

    addingButton(dataArray, destinationContainer) {
        const buttonArray = [];
        dataArray.forEach((input) => {
            const newButton = document.createElement('button');
            newButton.textContent = input.toString();
            destinationContainer.append(newButton);
            buttonArray.push(newButton);
            arrayButtons.push(newButton);
        });
        return buttonArray;
    }

    actionOnButton(buttonArray) {
        buttonArray.forEach((button) => {
            button.onclick = () => {
                const input = button.textContent.trim();
                // console.log(operandA);
                // console.log(operandB);
                handleInput(input);
            };
        });
    }
}

let operandA = null;
let operandB = null;
let currentOperator = null;
let isNegativeAllowed = true;

const output = new Result();
const buttonClassInstance = new Button();

const numberButtons = buttonClassInstance.addingButton(leftContainer, selectorLeftContainer);
const symbolButtons = buttonClassInstance.addingButton(symbols, selectorRightContainer);

buttonClassInstance.actionOnButton(numberButtons);
buttonClassInstance.actionOnButton(symbolButtons);

function handleInput(input) {
    if (!isNaN(input)) { // Если входящее значение - число
        isNegativeAllowed = true; 
        if (currentOperator === null) { 
            operandA = (operandA !== null) ? operandA + input : input; // Первый операнд
            output.setResult(input);
        } else {
            operandB = (operandB !== null) ? operandB + input : input; // Второй операнд
            output.setResult(input);
        }
    } 
    
    else if (input === "C") {
        output.reset();
    } else if (symbols.includes(input)) {
        if (input === "=") {
            if (operandA !== null && operandB !== null && currentOperator !== null) {
                const result = calculateResult(operandA, operandB, currentOperator);
                output.setResult(`=${result}`);
                output.result = result.toString(); 
                operandA = result;
                operandB = null;
                currentOperator = null;
            }
        } else {
            if (operandA !== null 
                && (operandB === null || operandB ==="-") 
                && currentOperator === null  
                ) { // Устанавливаем оператор
                currentOperator = input;
                output.setResult(input);
            }
             if (input === "-" && isNegativeAllowed) {
                // Обработка минуса для отрицательных чисел
                if (currentOperator !== null && operandA === null) {
                    isNegativeAllowed = false; // Минус можно ввести только один раз
                    if(input === "-" && currentOperator !== "-"){
                        operandA = "-";
                        output.setResult(operandA);
                    }
                }
                else{
                    isNegativeAllowed = false; // Минус можно ввести только один раз
                    if(input === "-" && currentOperator !== "-"){
                        operandB = "-";
                        output.setResult(operandB);
                    }
                }
            }
        }
    }
}

function calculateResult(a, b, operator) {
    const operand1 = parseFloat(a);
    const operand2 = parseFloat(b);
    switch (operator) {
        case "+":
            return operand1 + operand2;
        case "-":
            return operand1 - operand2;
        case "*":
            return operand1 * operand2;
        case "/":
            return operand2 !== 0 ? operand1 / operand2 : "Бесконечность";
        default:
            return 0;
    }
}