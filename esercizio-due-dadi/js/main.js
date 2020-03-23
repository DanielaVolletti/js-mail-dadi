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
  msg = "Utente, hai vinto."
} else {
  msg= "Ha vinto il computer."
}

console.log(msg);

// chi dei due ha vinto
document.getElementById('messaggio-vittoria').innerHTML = msg;
