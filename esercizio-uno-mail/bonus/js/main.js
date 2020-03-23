 // Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato;

// creo array delle email
var email = ["mario@hotmail.it", "francesca@libero.it", "roberto@gmail.com", "antonietta@hotmai.it", "gianni@libero.it"];

console.log(email);

// chiedo all'utente di inserire la email
var emailUtente = prompt("Inserisci la tua email");

// var presenza mail inserita tra le email indicate nell'array
var msgMailPresente = "Utente, l'email inserita non è valida per l'accesso.";

// verifico che la email inserita dall'utente sia presente tra le email array
for (var i = 0; i < email.length; i++) {
  if (emailUtente == email[i]) {
    msgMailPresente = "Utente, sei autorizzato ad accedere alla pagina.";
  }
  console.log(msgMailPresente);
}

// stampo un messaggio appropriato
document.getElementById('messaggio-utente').innerHTML = msgMailPresente;
