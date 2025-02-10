/* 

# Traccia
Descrizione
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

 */

/* 
# Tools

- prompt per chiedere il numero di chilometri che vuole percorrere
- prompt per chiedere l'età del passeggero
- const or let
- calcolo del prezzo del viaggio con le variabili (o,21 € al km)
    - if <18 20% di sconto 
    - else if >65 40% di sconto

*/


/* Raccolta dati */

const utente_distanza = prompt("scegli quanti chilometri vuoi percorre per il viaggio")
console.log(utente_distanza);

const utente_età = prompt("definisci la tua età")
console.log(utente_età);