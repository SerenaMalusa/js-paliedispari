// 1. prendo gli elementi dal dom
const Option1El = document.getElementById('option-1');
const Option2El = document.getElementById('option-2');
const numInputEl = document.getElementById('num-imput');
const sendBtn = document.getElementById('send-button');
const resultOputputEl = document.getElementById('result-output');

// 2. al click del bottone
sendBtn.addEventListener('click', function() {
    
    // 3. invoco la funzione numero random
    const pcNumber = getRandomNum(5,1);

    

})

function getRandomNum (max, min = 0) {

    // a. genera un numero random con parametri min e max
    const randomNum = Math.floor(Math.random() * (max +1 - min) + min);
    // b. restituisce il numero random
    return randomNum;

}