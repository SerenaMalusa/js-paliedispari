## Palidroma
### Traccia

Chiedere all'utente di inserire una parola  
Creare una funzione per capire se la parola inserita è palindroma  

### Svolgimento

1. prendo dal dom gli elementi che mi servono (input e bottone)
2. al click del bottone
3. invoco la funzione "è palindroma"
4. se è vero stampa il messaggio "la parola che hai inserito è palindroma"
5. se è falso stampa il messaggio "la parola che hai inserito non è palindroma"



**funzione "è palindroma"**  
a. prendo la parola dall'input value   
b. creo variabile che conterrà la patrola al contrario  
c. creo ciclo che conta da lunghezza parola -1 a 0  
d. prendo la lettera che corrisponde all'indice e la concateno alla parola al contrario  
e. se la parlo e la parola al contrario sono uguali la parola è palindroma => restituisci vero
f. altrimenti restituisci falso

