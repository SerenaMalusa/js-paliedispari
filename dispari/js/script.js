// 1. prendo gli elementi dal dom
const Option1El = document.getElementById('option-1');
const Option2El = document.getElementById('option-2');
const numInputEl = document.getElementById('num-input');
const sendBtn = document.getElementById('send-button');
const resultOputputEl = document.getElementById('result-output');

// 2. al click del bottone
sendBtn.addEventListener('click', function() {
    
    // 3. invoco la funzione numero random
    const pcNum = getRandomNum(5,1);

    // 4. prendo il numero dell'utente
    const userNum = numInputEl.value;

    // 5. sommo numero utente e numero random
    const sum = userNum + pcNum;

    // 6. invoco la funzione èPari
    console.log(isEven(userNum));
})

function getRandomNum (max, min = 0) {

    // a. genera un numero random con parametri min e max
    const randomNum = Math.floor(Math.random() * (max +1 - min) + min);
    // b. restituisce il numero random
    return randomNum;

}

function isEven (number) {

    // b. se il numero è divisibile x 2 restituisce 'pari'
    let result = (number % 2 == 0) ? 'pari' : 'dispari';
    return result;
     
}