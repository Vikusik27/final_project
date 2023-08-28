const field = document.querySelector('.value_field');

//operators
const clean = document.querySelector('.clean');
const unary_minus = document.querySelector('.unary_minus');
const percent = document.querySelector('.percent');
const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const equel = document.querySelector('.equel');

//operands
const dot = document.querySelector('.dot');
const num0 = document.querySelector('.num-0');
const num1 = document.querySelector('.num-1');
const num2 = document.querySelector('.num-2');
const num3 = document.querySelector('.num-3');
const num4 = document.querySelector('.num-4');
const num5 = document.querySelector('.num-5');
const num6 = document.querySelector('.num-6');
const num7 = document.querySelector('.num-7');
const num8 = document.querySelector('.num-8');
const num9 = document.querySelector('.num-9');

const numbers = [num0, num1, num2, num3, num4, num5, num6, num7, num8, num9];

let currOperator = null;
let operatorClicked = true;
let percentClicked = true;
let numClicked = true;
let currResult = null;

numbers.forEach(elem => elem.addEventListener('click', function() {
    if(numClicked){
        let currNum = +elem.innerText;
        operatorClicked = true;
        if(field.innerText === '0' || field.innerText == currResult) field.innerText = currNum;
        else if(field.innerText.length < 9) field.innerText += currNum;
    }

}))

clean.addEventListener('click', ()=> {
    field.innerText = '0';
    currResult = null;
    numClicked = true;
    currOperator  = null;
});

divide.addEventListener('click', ()=>{
    if(operatorClicked) operatorClick('divide');
    operatorClicked = false;
    numClicked = true;
})

multiply.addEventListener('click', ()=>{
    if(operatorClicked) operatorClick('multiply');
    operatorClicked = false;
    numClicked = true;
})

minus.addEventListener('click', ()=>{
    if(operatorClicked) operatorClick('minus');
    operatorClicked = false;
    numClicked = true;
})

plus.addEventListener('click', ()=>{
    if(operatorClicked) operatorClick('plus');
    operatorClicked = false;
    numClicked = true;
})

unary_minus.addEventListener('click', ()=>{
    if(operatorClicked) operatorClick('unary_minus');
    operatorClicked = false;
    numClicked = true;
    if(currResult){
        field.innerText = getResult();
        currResult = null;
        currOperator = null;
    }
})

equel.addEventListener('click', ()=>{
    operatorClicked = true;
    numClicked = false;
    if(currResult){
        field.innerText = getResult();
        currResult = null;
        currOperator = null;
    }
})

dot.addEventListener('click', ()=>{
    let currNum = field.innerText;
    if(field.innerText.length < 7){
        if(!currNum.includes('.')) field.innerText = currNum + '.';
    }
})

percent.addEventListener('click', ()=>{
    if(operatorClicked && percentClicked){
        let currNum = +field.innerText;
        let currResultNum = parseFloat(currResult);
        let newValue = (currResultNum * currNum) / 100;
        field.innerText = newValue;
    }
    operatorClicked = false;
    percentClicked = false;
    numClicked = true;
})

function operatorClick(operator) {
    if(operatorClicked){
        let currNum = parseFloat(field.innerText);
        currOperator = operator;
        if(!currResult){
            currResult = currNum;
            
            return ;
        } 
        currResult = getResult();
        field.innerText = currResult;
    }
}

function getResult(params) {
    let currNum = parseFloat(field.innerText);
    let newCurrNum;
    let currResultNum = parseFloat(currResult);

    switch(currOperator){
        case 'divide': newCurrNum = currResultNum / currNum;
        break;
        case 'multiply': newCurrNum = currResultNum * currNum;
        break;
        case 'minus': newCurrNum = currResultNum - currNum;
        break;
        case 'plus': newCurrNum = currResultNum + currNum;
        break;
        case 'unary_minus': newCurrNum = -currResultNum;
        break;

    }

    newCurrNum = newCurrNum.toFixed(2);

    if (newCurrNum == null || newCurrNum == undefined || isNaN(newCurrNum) || !isFinite(newCurrNum)) newCurrNum = 'Error!';
    
    return newCurrNum;
}

