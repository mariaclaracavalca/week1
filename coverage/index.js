/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
- String: è una sequenza di caratteri chiusi tra le apici ( doppia o singola )
- Bollean: è composto di due condizione ( vero o false )
- Number: è composto dai numero, sia intero (int) o decimali (float)
- Null: è un valore assegnabile che indica l'assenza di un valore ( let z = null )
- Undefined: è una variabile che è stata dichiarata ma non è stata assegnata un valore ( let x )
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
- Oggetti sono dati  come key-value, è come assegnare a una chiave il suo valore { "name": "Maria" , "cognome": "Cavalca" }
*/

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA
let a = 12;
let b = 20;
let soma = a + b;
console.log(soma)
console.log('A soma di ', a, '+', b, 'è uguale a', soma);
*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA
let x = 12
*/

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
const myName = 'Maria'
console.log(myName)
- Quando si aggiunge la variabile 'name', appare un messaggio che dice che la variabile è deprecata o obsoleta (non consigliabile)
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA 
const x = 12 
let subtraction = x - 4
console.log('La sottrazione di ', x, '-', 4, 'è uguale a ', (subtraction))
*/

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA 
const name1 = 'john'
const name2 = 'John'
console.log(name1 == name2)
console.log(name1 !== name2)
*/