// NOME E COGNOME

const nome  = prompt('Nome');
const cognome = prompt('Cognome');


// COLORE PREFERITO

const colore = prompt('Colore preferito');

// PASSWORD GENERATOR

const password = nome + cognome + colore + '23';

// HTML

    document.getElementById('outputpswd').innerHTML = `Password consigliata: ${nome}${cognome}${colore}23`;