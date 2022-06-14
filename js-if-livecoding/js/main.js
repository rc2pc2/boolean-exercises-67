
// ---- PRIMO LIVECODING : DUE PAROLE
// chiediamo all'utente due parole una dopo l'altra
// verifichiamo poi quale delle due parole sia più lunga:

    // - Se la prima parola è più lunga della seconda parola
        // scrivo la prima parola è la più lunga
    // - Se la seconda parola è più lunga della prima
        // scrivo che la seconda parola è la più lunga
    // Altrimenti entrambe sono della stessa lunghezza e lo scrivo


    // io in qualche modo ho usato una proprietà che si chiama length
    // per ottenere la lunghezza di una stringa basta che uso la proprietà .length


// stampiamo un messaggio che ci dica cosa è accaduto.

// const firstWord = prompt('Inserisci la prima parola');
// const secondWord = prompt('Inserisci la prima parola');

// if ( firstWord.length > secondWord.length ){
//     console.log('La prima parola è più lunga della seconda');
// } else if ( firstWord.length < secondWord.length ) {
//     console.log('La seconda parola è più lunga della prima')
// } else {
//     console.log('Le due parole sono di lunghezza uguale');
// }

// if ( firstWord.length > secondWord.length ){
//     console.log('La prima parola è più lunga della seconda');
// } else if ( firstWord.length == secondWord.length ) {
//     console.log('Le due parole sono di lunghezza uguale');
// } else {
//     console.log('La seconda parola è più lunga della prima')
// }


// SECONDO ESERCIZIO : età
// chiedo l'età a due persone, e stabilisco chi abbia più anni

// A - chiedo le due età all'utente
// B - casto ad intero entrambi i valori, perché ho bisogno di utilizzarli in operazioni numeriche
// C - confronto i due valori:
    // - se la prima è maggiore della seconda
    // - se sono uguali
    // - altrimenti la seconda è maggiore della seconda

// chiediamo all'utente di inserire due età e lo convertiamo ad intero attraverso parseInt()
// const firstAge = parseInt( prompt('Dimmi la tua età') );
// const secondAge = parseInt( prompt('Dimmi anche tu la tua età') );
// console.log(firstAge);

// // controllo se entrambi i valori inseriti siano stati convertiti a interi con successo
// if ( isNaN(firstAge) == true) {
//     console.log('Il primo numero non è stato accettato, ricarica la pagina');
//     // Se e solo se lo sono stati
// } else if (isNaN(secondAge) == true ) {
//     console.log('Il secondo numero non è stato accettato, ricarica la pagina');
// } else {
//     // verifico se il primo sia meno giovane del secondo
//     if (firstAge > secondAge) {
//         console.log('Prim* è meno giovane');

//     // verifico se siano della medesima età
//     } else if ( firstAge == secondAge  ) {
//         console.log('Sono della medesima età');

//     // in tutti gli altri casi (sarà meno giovane il secondo utente)
//     } else {
//         console.log('Second* è meno giovane');
//     }
// }

// ? pari o dispari:
    // chiediamo all'utente di scegliere: pari o dispari, e un numero intero tra 1 e 10;
    // calcoliamo un numero casuale per l'intelligenza artificiale
    // vediamo chi ha vinto:
        // caso in cui somma sia pari : utente ha scelto pari => vince utente
        // caso in cui somma sia pari : utente ha scelto dispari => vince ai
        // caso in cui somma sia dispari : utente ha scelto pari => vince ai
        // caso in cui somma sia dispari : utente ha scelto dispari => vince utente

// nota: per calcolare se un numero sia pari o dispari basta fare il numero x % 2 => se il risultato è = 0 allora il numero è pari, altrimenti è dispari.
// se è pari allora => x % 2 = 0
// se è dispari allora => x % 2 = 1

// const sceltaUtente = prompt('Scegli pari o dispari');

// if ((sceltaUtente != 'pari') && (sceltaUtente != 'dispari') ) {
//     alert('Hai sbagliato a scegliere, ricarica la pagina');
// }

// const numeroUtente = parseInt( prompt('Inserisci un numero ad 1 a 10') );

// // genero un numero randomico tra 1 e 10 compresi
// // arrotonda in eccesso la moltiplicazione di un numero randomico tra 0 e 1 moltiplicato per dieci a cui sommo 1
// const numeroIA = Math.floor( (Math.random() * 10) + 1);
// console.log(numeroIA);

// const somma = numeroUtente + numeroIA;
// console.log(somma);

// let risultato;
// // § l'operatore modulo % restituisce il resto della divisione del primo operando per il secondo operando
// if ( somma % 2 == 0) {
//     risultato = 'pari';
// } else {
//     risultato = 'dispari';
// }

// if (sceltaUtente === risultato){
//     console.log('Vince il giocatore');
// } else {
//     console.log('Vince l\'intelligenza artificiale');
// }

// Come calcolo la percentuale di un numero?

const userNumber = parseInt( prompt('Inserisci un numero qualsiasi') );
const percentage = parseInt( prompt('Inserisci una percentuale') );

const result = (userNumber * percentage) / 100;

console.log(`La percentuale ${percentage} di ${userNumber} è: ${result}`);
