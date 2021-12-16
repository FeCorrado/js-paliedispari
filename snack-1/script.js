// Input utente
const parolaUtente = prompt('Inserisci una parola:');

// Funzione palindroma
function inverter(parola) {
    const separate = parolaUtente.split('').reverse().join('');
    if (parolaUtente == separate) {
        console.log('La parola è palindroma');
    } else {
        console.log('La parola non è palindroma')
    }
}

inverter(parolaUtente);