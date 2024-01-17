// 1. prendo dal dom gli elementi che mi servono
const wordInputEl = document.getElementById('word-input');
const sendBtnEl = document.getElementById('send-button');
const resultOutputEl = document.getElementById('result-output');

// 2. al click del bottone
sendBtnEl.addEventListener('click', function () {
    
    // 3. invoco la funzione "è palindroma" e 
    // 4. se è vero stampa il messaggio "la parola che hai inserito è palindroma"
    // 5. se è falso stampa il messaggio "la parola che hai inserito non è palindroma"
    let result = isPalindrome() ? 'La parola è palindroma' : 'La parola non è palindroma';  
    
    // stampa in pagina
    resultOutputEl.innerText = result;

})

function isPalindrome () {
    return false;
}