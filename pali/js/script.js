// 1. prendo dal dom gli elementi che mi servono
const errorMsgEl = document.querySelector('.invalid-feedback');
const wordInputEl = document.getElementById('word-input');
const sendBtnEl = document.getElementById('send-button');
const resultOutputEl = document.getElementById('result-output');

// 2. al click del bottone
sendBtnEl.addEventListener('click', function () {

    // a. prendo la parola dall'input value 
    let userWord = wordInputEl.value.trim();

    // 3. invoco la funzione "è palindroma" e 
    // 4. se è vero stampa il messaggio "la parola che hai inserito è palindroma"
    // 5. se è falso stampa il messaggio "la parola che hai inserito non è palindroma"
    let result = isPalindrome(userWord) ? `La parola '${userWord}' è palindroma` : `La parola '${userWord}' non è palindroma`;  
    
    // se l'utente inserisce una stringa vuota
    if ( !userWord ) {
        wordInputEl.classList.add('is-invalid');
        errorMsgEl.innerText = `Per favore inserisci una parola.`
        result = '';
    }
    
    // stampa in pagina
    resultOutputEl.innerText = result;

})

function isPalindrome (word) {

    // b. creo variabile che conterrà la patrola al contrario  
    let oppositeWord = '';

    // c. creo ciclo che conta da lunghezza parola -1 a 0 
    for (i=word.length - 1; i >= 0; i--) {

        // d. prendo la lettera che corrisponde all'indice e la concateno alla parola al contrario  
        let letter = word[i];
        oppositeWord += letter;

    }

    // e. se la parlo e la parola al contrario sono uguali la parola è palindroma => restituisci vero
    // f. altrimenti restituisci falso
    let result = (oppositeWord === word) ? true : false;
    return result;

}