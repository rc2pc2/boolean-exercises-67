// ? ho creato un nuovo array di stringhe e l'ho assegnato alla variabile classe67
// let classe67 = [
//         'simone',
//         'bianca',
//         'carlo',
//         99,
//         true,
//         false,
//         'grace'
//     ];

// const array = [ "alessio", "francesco", 'sofia'];

// const userName = prompt('inserisci un nome');

// // array.push(userName);
// console.log(array);
// console.log(array.indexOf(userName));

// console.log(array[array.length - 1]) // ? visualizzare l'ultimo elemento di un array

// for (let index = 0; index < array.length; index++) {
//     console.log(array[index]);
// }

// indexOf mi darà -1 se non trova nulla
// in tutti gli altri casi mi darà l'indici in cui si trova ciò che cerco

// if (array.indexOf(27) === -1 )
// if (!array.includes(28)){
//     // se non l'hai trovato
//     alert('Mi spiace, ritenta!');
// } else {
//     alert('Hai vinto, il numero è presente!');
// }

// console.log(array);
// const ultimoElemento = array.shift();

// console.log(ultimoElemento);
// console.log(array);

// const shoppingCart = [
//     'Monitor LCD',
//     'Case ATX',
//     'Smartphone Pear'
// ];

// const numberWrapper = document.getElementById('number-wrapper');

// //| ciclo per ogni elemento dell'array shoppingCart
// //? assegno ad index un valore uguale a 0, fino a quando l'indice è minore della lunghezza dell'array allora incrementa di uno l'indice index
// for ( let index = 0 ; index < shoppingCart.length ; index++) {  // per ogni elemento dell'array

//     //§ scrivo in console l'elemento che si trova in posizione index (o con indice index) nell'array shoppingCart
//     // console.log(index + " - " + shoppingCart[index]);

//     // # creo un nuovo elemento all'interno del quale inserirò la stringa presente nell'array all'indice che sto scorrendo
//     const shoppingItem = document.createElement('div');
//     shoppingItem.classList.add('box','col-4');
//     shoppingItem.innerHTML = shoppingCart[index];

//     //| aggiungo l'elemento creato al parent al quale voglio aggiungerlo
//     numberWrapper.append(shoppingItem);
// }

// for (let index = 0; index < shoppingCart.length ; index++ ){
//     console.log(index);
//     // console.log("shoppingCart["+index+"] => ", shoppingCart[index] )
//     console.log(shoppingCart[index]);
// }


// const array = ['miao', 'bau', 'il coccodrillo non so come fa']

// // ? cicliamo nell'array per ogni elemento disponibile dall'ultimo al primo
// for ( let index = array.length - 1 ; index >= 0 ; index-- ){
//     console.log(index);
//     console.log(array[index]);
// }

// // § cicliamo nell'array per ogni elemento disponibile dal primo all'ultimo
// for ( let index = 0 ; index < array.length ; index++ ){
//     console.log(index);
//     console.log(array[index]);
// }



/**
     * Dobbiamo controllare che il numero che l'utente ha scelto sia presente nell'array */


const primiTreMultipliDiTre = [6, 9, 12];

const userChoice = parseInt( prompt('Inserisci un numero') );

// ? Iniziamo dal presupposto che non esista un elemento nell'array
let numeroTrovato = false;

for (let index = 0; index < primiTreMultipliDiTre.length ; index++){
    // console.log(index);
    const element = primiTreMultipliDiTre[index];

    // # se dovessimo riuscire a trovarlo in questa iterazione specifica, allora
    if ( userChoice === element ){

        // § assegnamo alla variabile globale numeroTrovato il valore di = true
        numeroTrovato = true;
    }
}

console.log(numeroTrovato); // | true se è stato trovato almeno una volta l'elemento nell'array, false in caso contrario.



// l'utente se ha vinto facciamo qualcosa
// se ha perso facciamo qualcos'altro