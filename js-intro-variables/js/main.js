
// commento mono-linea

/**
 * Commento
 * Su
 * più
 * righe
 */

// console.warn('io sono un warning');

// document.writeln("Hello Classe 67!");

// alert('Ricordati l\'acqua sul fuoco');

// document.getElementById('subtitle').innerHTML = "Io sono il miglior sottotitolo che sia mai esistito";

// let subtitleContent = document.getElementById('subtitle').innerHTML;


// // ? Dichiarazione di una variabile
// let variabile;

// // § Assegnazione di una variabile || Prima della quale avrà valore undefined
// variabile = 'ciao';

// // # Dichiarazione e assegnazione di una variabile || Inizializzazione
// let secondaVariabile = 12;

// variabile = 100;

// console.log(variabile);


// let infoUtente = prompt('Inserisci il tuo nome');
// infoUtente = parseInt(infoUtente);
// console.log(infoUtente);

// let infoUtenteNumerico = parseInt(infoUtente);
// console.log(infoUtenteNumerico);

//  prendiamo l'età dell'utente
//  togliamo l'età dell'utente a 2022
//  restituisco l'anno di nascita


// // | Chiediamo all'utente quanti anni abbia e comunichiamo l'anno di nascita
// let userAge = prompt('Inserisci la tua età');
// userAge = parseInt(userAge);

// console.log(userAge);

// let userBirthYear = 2022 - userAge;
// console.log(userBirthYear);

// document.getElementById('user-birth-year').innerHTML = userBirthYear;


// dichiariamo una variabile
// assegniamo alla variabile appena creata il valore del prompt inserito dall'utente
// lo mostriamo:
//      -  prendo l'elemento HTML che voglio popolare
//      -  ne cambio il contenuto sovrascrivendolo, inserendoci il contenuto della variabile di prima

const userName = prompt('Inserisci il tuo nome');

console.log(userName, email, age);

document.getElementById('user-name').innerHTML = userName;