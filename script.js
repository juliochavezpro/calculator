let a;
let b;
let output;

const screenOutput = document.getElementById('current');

const history = document.getElementById('history');

history.innerText = ' ';

const buttons = document.querySelectorAll('.btn');

const equalBtn = document.getElementById('equal-btn');

const operators = document.querySelectorAll('.operator')

const findSum = operators[3].addEventListener('click', add = () => {
    history.innerText = `${a}+${b}`;
});

const findDifference = operators[2].addEventListener('click', subtract = () => {
    history.innerText = `${a}-${b}`;
    screenOutput.innerText = `${b}`;
});


const findProduct = operators[1].addEventListener('click', multiply = () => {
    history.innerText = `${a}*${b}`;
    screenOutput.innerText = `${b}`;
});

const findQuotient = operators[0].addEventListener('click', divide = () => {
    history.innerText = `${a}/${b}`;
    screenOutput.innerText = `${b}`;
});

function solve() {
    if (typeof b !== 'number') {
        screenOutput.innerText = `${a}`
        console.log(`output = ${output}`);
    } else {
        screenOutput.innerText = `${output}`;
        a = output;
    }
}

const equals = () => {
    equalBtn.addEventListener("click", solve())
}

function clearCalculator() {
    a = '';
    b = '';
    history.innerText = '';
    screenOutput.innerText = '';
}


function setVal(val) {
    if (typeof a == 'undefined' && output == 'undefined') {
        a = val;
        screenOutput.innerText = `${a}`;
    } else if (typeof a !== 'undefined') {
        a = `${a}${val}`;
        screenOutput.innerText = `${a}`;
    } else if (typeof b == 'undefined') {
        b = val;
        screenOutput.innerText = `${b}`
    } else {
        b = `${b}${val}`
        screenOutput.innerText = `${b}`
    }
};