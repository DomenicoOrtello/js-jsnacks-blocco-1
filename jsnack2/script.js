//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// Array contenente i nomi degli invitati
const invitati = ["Domenico", "Ale", "Marco", "Richard", "Samu"];

// Chiedi il nome all'utente
const nomeUtente = prompt("Qual è il tuo nome?");

// Variabile per determinare se l'utente è invitato
let invitato = false;

// Ciclo di controllo per vedere se il nome è presente nell'array
for (let i = 0; i < invitati.length; i++) {
    if (invitati[i] === nomeUtente) {
        invitato = true;
    }
}

// Comunica all'utente se è invitato o no
if (invitato) {
    alert("Puoi partecipare alla festa del Grande Gatsby!");
} else {
    alert("Mi dispiace, non sei nella lista degli invitati.");
}
