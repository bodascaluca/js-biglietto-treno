// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//                      il prezzo del biglietto è definito in base ai km (0.21 € al km)
//                      va applicato uno sconto del 20% per i minorenni
//                      va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// L'output va stampato nella pagina HTML.


// Quanti chilometri vuoi fare?
const userMeter = parseInt(prompt(`Quanti chilometri vuoi fare?`));
console.log(userMeter, typeof(userMater));

// Quanti anni hai? 
const userAge = parseInt(prompt(`Quanti anni hai?`));
console.log(userAge);

// Calcolare prezzo intero 
let fullPrice = userMeter * 0.21 ;

// Hai più di 18 anni?
if(userAge < 18){
    fullPrice = fullPrice - (fullPrice * 20 / 100);
} else if (userAge >= 65){
    fullPrice = fullPrice - (fullPrice * 40 / 100);
}
console.log(fullPrice);

// Infine scrivi su Html
document.getElementById(`final-price`).innerHTML = fullPrice;



