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

const user_distance = prompt("scegli quanti chilometri vuoi percorre per il viaggio")
console.log(user_distance);

const user_age = Number(prompt("definisci la tua età"))
console.log(user_age);

const price_km = 0.21;
console.log(price_km);

const cost_voyage = user_distance * price_km;
console.log(cost_voyage);

const price_20 = cost_voyage - (cost_voyage / 100) * 20 .toFixed(2);
console.log(price_20);


const price_40 = cost_voyage - (cost_voyage / 100) * 40 .toFixed(2);
console.log(price_40);

/* Calcolo costo viaggio */

if (user_age < 18){

    console.log(price_20);

} else if ( user_age >= 65) {

    console.log(price_40);

} else{
console.log(price_km);
}