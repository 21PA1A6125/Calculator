let opText = document.getElementById('operationsText');
let finalOp = document.getElementById('calculatorText');
let operationsArray = [];
let numbersArray = [];
let operations = '';
let totalOperations = '';
let result = 0;
let clear = document.getElementById('clearBtn');
clear.addEventListener('click', function() {
    result = 0;
    finalOp.textContent = result;
    let numLent = numbersArray.length;
    numbersArray.splice(0, numLent);
    let opLent = operationsArray.length;
    operationsArray.splice(0, opLent);
    operations = '';
    totalOperations = '';
    opText.textContent = 0;

});

let one = document.getElementById('1Btn');
one.addEventListener('click', function() {
    operations = operations + '1';
    totalOperations = totalOperations + '1';
    opText.textContent = totalOperations;
});
let two = document.getElementById('2Btn');
two.addEventListener('click', function() {
    operations = operations + '2';
    totalOperations = totalOperations + '2';
    opText.textContent = totalOperations;
});
let three = document.getElementById('3Btn');
three.addEventListener('click', function() {
    operations = operations + '3';
    totalOperations = totalOperations + '3';
    opText.textContent = totalOperations;
});
let four = document.getElementById('4Btn');
four.addEventListener('click', function() {
    operations = operations + '4';
    totalOperations = totalOperations + '4';
    opText.textContent = totalOperations;
});
let five = document.getElementById('5Btn');
five.addEventListener('click', function() {
    operations = operations + '5';
    totalOperations = totalOperations + '5';
    opText.textContent = totalOperations;
});
let six = document.getElementById('6Btn');
six.addEventListener('click', function() {
    operations = operations + '6';
    totalOperations = totalOperations + '6';
    opText.textContent = totalOperations;
});
let seven = document.getElementById('7Btn');
seven.addEventListener('click', function() {
    operations = operations + '7';
    totalOperations = totalOperations + '7';
    opText.textContent = totalOperations;
});
let eight = document.getElementById('8Btn');
eight.addEventListener('click', function() {
    operations = operations + '8';
    totalOperations = totalOperations + '8';
    opText.textContent = totalOperations;
});
let nine = document.getElementById('9Btn');
nine.addEventListener('click', function() {
    operations = operations + '9';
    totalOperations = totalOperations + '9';
    opText.textContent = totalOperations;
});
let zero = document.getElementById('0Btn');
zero.addEventListener('click', function() {
    operations = operations + '0';
    totalOperations = totalOperations + '0';
    opText.textContent = totalOperations;
});

let dZero = document.getElementById('00Btn');
dZero.addEventListener('click', function() {
    operations = operations + '00';
    totalOperations = totalOperations + '00';
    opText.textContent = totalOperations;
});

let dot = document.getElementById('.Btn');
dot.addEventListener('click', function() {
    operations = operations + '.';
    totalOperations = totalOperations + '.';
    opText.textContent = totalOperations;
});

let plus = document.getElementById('+Btn');
plus.addEventListener('click', function() {
    numbersArray.push(parseFloat(operations));
    operationsArray.push('+');
    operations = '';
    totalOperations = totalOperations + '+';
    opText.textContent = totalOperations;
    console.log(operationsArray);
});

let minus = document.getElementById('-Btn');
minus.addEventListener('click', function() {
    numbersArray.push(parseFloat(operations));
    operationsArray.push('-');
    operations = '';
    totalOperations = totalOperations + '-';
    opText.textContent = totalOperations;
    console.log(operationsArray);
});

let into = document.getElementById('*Btn');
into.addEventListener('click', function() {
    numbersArray.push(parseFloat(operations));
    operationsArray.push('*');
    operations = '';
    totalOperations = totalOperations + '*';
    opText.textContent = totalOperations;
    console.log(operationsArray);
});

let divi = document.getElementById('/Btn');
divi.addEventListener('click', function() {
    numbersArray.push(parseFloat(operations));
    operationsArray.push('/');
    operations = '';
    totalOperations = totalOperations + '/';
    opText.textContent = totalOperations;
    console.log(operationsArray);
});

let equal = document.getElementById('=Btn');
equal.onclick = function() {
    numbersArray.push(parseFloat(operations));
    console.log(numbersArray);
    console.log(operationsArray);
    result = numbersArray[0];
    numbersArray.splice(0, 1);
    let opLent = operationsArray.length;
    for (let i = 0; i < opLent; i++) {
        if (operationsArray[i] === '+') {
            result = result + numbersArray[i];
        } else if (operationsArray[i] === '-') {
            result = result - numbersArray[i];
        } else if (operationsArray[i] === '*') {
            result = result * numbersArray[i];
        } else if (operationsArray[i] === '/') {
            result = result / numbersArray[i];
        }
    }
    finalOp.textContent = result;
    let numLent = numbersArray.length
    numbersArray.splice(0, numLent)
    operationsArray.splice(0, opLent)
    operations = '' + result;
    totalOperations = '' + result;


}