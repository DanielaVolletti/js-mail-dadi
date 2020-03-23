// Gioco dei dadi, chi fa di più vince.

// lancio dado da parte utente
var utente = Math.floor(Math.random() * 6) + 1;

console.log("Lancio utente " + utente);

// lancio dado da parte computer
var computer = Math.floor(Math.random() * 6) + 1;

console.log("Lancio computer " + computer);

// var messaggio
var msg;

// numero più grande vince
if (utente > computer) {
  msg = "Utente, il computer dal lancio ha ottenuto " + computer + ", e tu " + utente + ", quindi hai vinto."
} else if ( utente < computer){
  msg= "Utente, il computer dal lancio ha ottenuto " + computer + ", e tu " + utente + ", quindi ha vinto il computer."
} else {
  msg = "Utente, tu e il computer avete ottenuto lo stesso punteggio dal lancio (rispettivamente: " + utente + " e " + computer + ", quindi siete pari."
}

console.log(msg);

// chi dei due ha vinto
document.getElementById('messaggio-vittoria').innerHTML = msg;
