const selectorLeftContainer = document.querySelector("#left-container");
const resultEl = document.querySelector("output");
const selectorRightContainer = document.querySelector("#right-container");
const arrayButtons = []


const leftContainer = Array.from(Array(10).keys());
leftContainer.push(0);
leftContainer.push("C")
leftContainer.shift();

const symbols = ["*", "/", "-", "+", "="]

const deleteSymbol = "C"


class Result {
    constructor() {
        this.result = '';
    }

    result = '';

    setResult(newResult) {
        this.result = newResult;
        resultEl.textContent += newResult;
    }
}

class Button{

    constructor(){
        this.name = ""
    }

    addingButton(dataArray, destinationArray){
        dataArray.forEach((input) => {
            const newButton = document.createElement('button');
            const span = document.createElement('span');
            span.textContent = input.toString();
            newButton.append(span);
            destinationArray.append(newButton)
            arrayButtons.push(newButton)
            }
        )
        return arrayButtons
    };

    actionOnButton(buttons){
        this.name.forEach((input) => {
                    input.onclick = () => {
                        switch (input.toString()) {
                            case '*':
                                console.log('Умножить');
                                a=b
                                d = "";
                                output.setResult(input)
                                console.log(b);
                                break;
                
                            case '/':
                                console.log('Разделить');
                                output.setResult(input)
                                break;
                
                            case '-':
                                console.log('Вычесть');
                                output.setResult(input)
                                break;
                            
                
                            case '+':
                                console.log('Сложить');
                                output.setResult(input)
                                break;
                                   
                            case '=':
                                console.log('Равно');
                                output.setResult(input)
                                output.setResult(a*d)
                                console.log(a);
                                console.log(d);
                                console.log(Number(a)*Number(d));
                
                                break;
                            
                            default:
                                console.log(input)
                                output.setResult(input)
                                if (d==="") {
                                    d += input.toString()
                                }
                                b += input.toString()
                                break;
                        }
                    }
        })
    };
}

const output = new Result();

const elements = leftContainer.concat(symbols).concat(deleteSymbol);
let a = 0;
let b = "";
let c = 0;
let d = "";

const numberButtons = new Button().addingButton(leftContainer, selectorLeftContainer)
const symbolButtons = new Button().addingButton(symbols, selectorRightContainer)

console.log(typeof numberButtons)
numberButtons.actionOnButton()
// const numberButtonss = new Button().actionOnButton(numberButtons)

// numberButtons.actionOnButton(numberButtons)

//addingButton(leftContainer)
//addingButton(symbols)
console.log(selectorLeftContainer)
//  actionOnButton(selectorLeftContainer)
// actionOnButton(symbols)

// function actionOnButton(array){
//     selectorLeftContainer.onclick.forEach((input) => {
//         newButton.onclick = () => {
//             switch (input.toString()) {
//                 case '*':
//                     console.log('Умножить');
//                     a=b
//                     d = "";
//                     output.setResult(input)
//                     console.log(b);
//                     break;
    
//                 case '/':
//                     console.log('Разделить');
//                     output.setResult(input)
//                     break;
    
//                 case '-':
//                     console.log('Вычесть');
//                     output.setResult(input)
//                     break;
                
    
//                 case '+':
//                     console.log('Сложить');
//                     output.setResult(input)
//                     break;
                       
//                 case '=':
//                     console.log('Равно');
//                     output.setResult(input)
//                     output.setResult(a*d)
//                     console.log(a);
//                     console.log(d);
//                     console.log(Number(a)*Number(d));
    
//                     break;
                
//                 default:
//                     console.log(input)
//                     output.setResult(input)
//                     if (d==="") {
//                         d += input.toString()
//                     }
//                     b += input.toString()
//                     break;
//             }
//         }
// })
// };

// function addingButton(array){
//     array.forEach((input) => {
//         const newButton = document.createElement('button');
//         const span = document.createElement('span');
//         span.textContent = input.toString();
//         newButton.append(span);
//         selectorLeftContainer.append(newButton)
//     })};
//         newButton.onclick = () => {
//             switch (input.toString()) {
//                 case '*':
//                     console.log('Умножить');
//                     a=b
//                     d = "";
//                     output.setResult(input)
//                     console.log(b);
//                     break;
    
//                 case '/':
//                     console.log('Разделить');
//                     output.setResult(input)
//                     break;
    
//                 case '-':
//                     console.log('Вычесть');
//                     output.setResult(input)
//                     break;
                
    
//                 case '+':
//                     console.log('Сложить');
//                     output.setResult(input)
//                     break;
                       
//                 case '=':
//                     console.log('Равно');
//                     output.setResult(input)
//                     output.setResult(a*d)
//                     console.log(a);
//                     console.log(d);
//                     console.log(Number(a)*Number(d));
    
//                     break;
                
//                 default:
//                     console.log(input)
//                     output.setResult(input)
//                     if (d==="") {
//                         d += input.toString()
//                     }
//                     b += input.toString()
//                     break;
//             }
//         }
// })
// };