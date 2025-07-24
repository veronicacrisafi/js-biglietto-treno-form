/* 
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console. 

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. 
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

MILESTONE 3:
Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.

*/

// seleziono i nodi della DOM nel form

const kmFieldEl = document.getElementById("km-field");
const ageFieldEl = document.getElementById("age-field");
const formEl = document.querySelector("form");
const outputEl = document.getElementById("output");
const kmPrice = 0.21;
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const kmFieldValue = Number(kmFieldEl.value);
  const ageFieldValue = Number(ageFieldEl.value);

  let totalPrice = kmFieldValue * kmPrice;

  if (ageFieldValue < 18) {
    totalPrice -= totalPrice * 0.2;
  } else if (ageFieldValue > 65) {
    totalPrice -= totalPrice * 0.4;
  }
  const finalPrice = totalPrice.toFixed(2);

  outputEl.innerHTML = totalPrice;
});

// seleziono i nodi della DOM nella card

// trigerare il submit

//prendere i dati

// aggiornare la card
