const displayEl = document.querySelector('h3');
const rangeEl = document.querySelector('#range-amount');
const numberEl = document.querySelector('#numb-amount');
const numbers = document.querySelector('#numbers');
const symbols = document.querySelector('#symbols');
const uppercase = document.querySelector('#uppercase');
const formEl = document.querySelector('form');


function generatePassword(passwordLength, addNumbers, addSymbols, addUppercase) {
    let charactersCode = lowercaseCharCodes
    console.log(addNumbers)
    if (addNumbers) charactersCode = charactersCode.concat(numbersCharCodes);
    if (addSymbols) charactersCode = charactersCode.concat(symbolsCharCodes);
    if (addUppercase) charactersCode = charactersCode.concat(uppercaseCharCodes);

    passwordList = []
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * charactersCode.length)
        passwordList.push(String.fromCharCode(charactersCode[randomIndex]))
    }
    console.log(passwordList)
    displayEl.textContent = passwordList.join('')
        // console.log(displayEl)
}

function syncAmount(e) {
    const amount = e.target.value;
    rangeEl.value = amount;
    numberEl.value = amount;
};

function codeNumbers(minNumber, maxNumber) {
    let codeArray = [];
    for (let i = minNumber; i <= maxNumber; i++) {
        codeArray.push(i);
    };
    return codeArray;
};

const lowercaseCharCodes = codeNumbers(97, 122);
const uppercaseCharCodes = codeNumbers(65, 90);
const numbersCharCodes = codeNumbers(48, 57);
let symbolsCharCodes = codeNumbers(58, 64).concat(codeNumbers(91, 96)).concat(codeNumbers(123, 126))

formEl.addEventListener('submit', function(e) {
    e.preventDefault();
    const passwordLength = rangeEl.value;
    const addNumbers = numbers.checked;
    const addSymbols = symbols.checked;
    const addUppercase = uppercase.checked;
    generatePassword(
        passwordLength,
        addNumbers,
        addSymbols,
        addUppercase
    )
})
rangeEl.addEventListener('input', syncAmount);
numberEl.addEventListener('input', syncAmount);