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
const nomePasseggeroFieldEl = document.getElementById("name-field");
const kmPrice = 0.21;
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const kmFieldValue = Number(kmFieldEl.value);
  const ageFieldValue = Number(ageFieldEl.value);
  const nomePasseggeroValue = nomePasseggeroFieldEl.value;
  let totalPrice = kmFieldValue * kmPrice;

  if (ageFieldValue < 18) {
    totalPrice -= totalPrice * 0.2;
  } else if (ageFieldValue > 65) {
    totalPrice -= totalPrice * 0.4;
  }
  const finalPrice = totalPrice.toFixed(2);
  const cpCode = getRandomNumber(10000, 20000);
  const carrozzaNumber = getRandomNumber(1, 15);

  outputEl.innerHTML = generaTicketMarkup(
    nomePasseggeroValue,
    finalPrice,
    cpCode,
    carrozzaNumber
  );
});

//funzione che genera numeri random
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generaTicketMarkup(
  nomePasseggeroValue,
  finalPrice,
  cpCode,
  carrozzaNumber
) {
  return `
  <div class="card">
                <div class="card-body">
                <div class= "card-header">
                ${nomePasseggeroValue}
                </div>
                    <h3>Il tuo biglietto</h3>
                    <div>
                        <span>Prezzo finale</span>
                        <strong>${finalPrice}&euro;</strong>
                    </div>
                </div>
                <!-- /.card-body -->
                <div class="card-footer">
                    <div>
                        <span>CP CODE</span>
                        <strong class="cp-code">${cpCode}</strong>
                    </div>
                    <div>
                        <span>CARROZZA</span>
                        <strong class="numero-carrozza">${carrozzaNumber}</strong>
                    </div>
                </div>
                <!-- /.card-footer -->
            </div>`;
}
