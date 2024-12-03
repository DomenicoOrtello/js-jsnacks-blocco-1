//L’utente inserisce due numeri in successione, con due prompt.
//Il software stampa il maggiore

let numero1 = prompt("Inserisci il primo numero:");
while(isNaN (numero1)){
    numero1 = prompt("Inserisci il primo numero:");
}
const numero2 = prompt("Inserisci il secondo numero:");

if (numero1 > numero2) {
    alert (numero1)
    console.log("Il numero maggiore è: " + numero1);
} else if (numero2 > numero1) {
    alert (numero2)
    console.log("Il numero maggiore è: " + numero2);
} else {
    alert ("i numeri sono uguali")
    console.log("I due numeri sono uguali: " + numero1);
}