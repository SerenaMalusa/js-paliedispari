// 1. prendo gli elementi dal dom
const selectEl = document.getElementById('select');
const numInputEl = document.getElementById('num-input');
const errorMsgEl = document.querySelector('.invalid-feedback');
const sendBtn = document.getElementById('send-button');
const resultOputputEl = document.getElementById('result-output');

// 2. al click del bottone
sendBtn.addEventListener('click', function() {
    
    // 3. invoco la funzione numero random
    const pcNum = getRandomNum(5,1);

    // 4. prendo il numero dell'utente
    const userNum = parseInt(numInputEl.value.trim());

    // se l'utente ha inserito un dato non valido
    if (!userNum || isNaN(userNum) || userNum > 5 || userNum <= 0) {

        // segnala l'errore
        numInputEl.classList.add('is-invalid');
        errorMsgEl.innerText = `Per favore inserisci una numero da 1 a 5.`;
        // blocca tutto
        return ;
        
    }

    // 5. sommo numero utente e numero random
    const sum = userNum + pcNum;

    // 6. invoco la funzione èPari
    let sumValue = isEven(sum);

    // 7. prendo la scelta dell'utente
    const userChoice = selectEl.value.trim();
    
    // 8. se la scelta utente è uguale al risultato della somma ha vinto l'utente
    // 9. altrimenti l'utente ha perso 
    const result = sumValue == userChoice ? 'Hai vinto!' : 'Ritenta e sarai più fortunato';

    // stampo in pagina
    resultOputputEl.innerHTML = `
    <div class='row justify-content-center'>
                <div class="col-3">
                    il tuo numero
                    <br>
                    ${userNum}
                </div>
                <div class="col-3">
                    il numero del computer
                    <br>
                    ${pcNum}
                </div>
                <div class="col-3">
                    la somma
                    <br>
                    ${sum}
                </div>
                <div class="col-3">
                    la tua scelta
                    <br>
                    ${userChoice}
                </div>

            </div>
            <h2 class="mt-5">${result}</h2>`;

    // resetta i campi dell errore
    errorMsgEl.innerText = ``;
    numInputEl.classList.remove('is-invalid');

})

function getRandomNum (max, min = 0) {

    // a. genera un numero random con parametri min e max
    const randomNum = Math.floor(Math.random() * (max +1 - min) + min);
    // b. restituisce il numero random
    return randomNum;

}

function isEven (number) {

    // b. se il numero è divisibile x 2 restituisce 'pari'
    // c. altrimenti restituisce 'dispari'
    let result = (number % 2 == 0) ? 'pari' : 'dispari';
    return result;
     
}