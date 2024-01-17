## Pari e Dispari
### Traccia

L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.  
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).  
Sommiamo i due numeri  
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)  
Dichiariamo chi ha vinto.

### Svolgimento

1. prendo gli elementi dal dom
2. al click del bottone
3. invoco la funzione numero random
4. prendo il numero dell'utente
5. sommo numero utente e numero random
6. invoco la funzione èPari
7. prendo la scelta dell'utente
8. se la scelta utente è uguale al risultato della somma ha vinto l'utente
9. altrimenti l'utente ha perso

**funzione è random**
a. genera un numero random con parametri min e max
b. restituisce il numero random

**funzione èPari**
a. prende il numero come argomento
b. se il numero è divisibile x 2 restituisce 'pari'
c. altrimenti restituisce 'dispari'