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
    
    // 3. prendo la parola dall'input value 
    const userWord = wordInputEl.value;

    // 4. creo variabile che conterrà la patrola al contrario  
    let oppositeWord = '';

    // 5. creo ciclo che conta da lunghezza parola -1 a 0 
    for (i=userWord.length - 1; i >= 0; i--) {

        // 6. prendo la lettera che corrisponde all'indice e la concateno alla parola al contrario  
        let letter = userWord[i];
        oppositeWord += letter;

    }

    // 7. se la parlo e la parola al contrario sono uguali la parola è palindroma => restituisci vero
    // 8. altrimenti restituisci falso
    let result = (oppositeWord === userWord) ? true : false;
    return result;
    
}