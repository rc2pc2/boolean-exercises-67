// const dateEl = new Date();
// console.log(dateEl);
// console.log(dateEl.getHours() + ":" + dateEl.getMinutes() + ":" + dateEl.getSeconds());


// § arrotondo per difetto -> un valore randomico tra 0 e 1 moltiplicato per il numero massimo che voglio ottenere più il numero minimo che voglio ottenere.
// console.log( Math.floor( (Math.random() * 100) ));

// const userNumber = prompt('Insersci un numero qualsiasi');

// if (userNumber > 100) {
//     const halfUserNumber = userNumber / 2;

//     console.log('Il numero è maggiore di 100');
//     console.log('La metà del tuo numero è: ' + halfUserNumber);
// } else {
//     console.log('Il numero è minore uguale di 100');
// }

// const validation = true;

// let wordA = "WordA"; // variabile globale
// let wordB = "WordB";

// if (validation == true){
//     console.log(wordA);
//     console.log(wordB);
//     wordB = "Word B SuperCustom";
//     console.log(wordB);

//     let wordC = "WordC";
//     console.log(wordC);
// }

// console.log(wordB);
// console.log(wordC);


let dayOfTheWeek = parseInt( prompt('Inserisci il numero del giorno della settimana'));

let message;

console.warn

switch (dayOfTheWeek){
    case 1:
        message = 'Lunedì';
        break;
    case 2:
        message = 'Martedì';
        break;
    case 3:
        message = 'Mercoledì';
        break;
    case 4:
        message = 'Giovedì';
        break;
    case 5:
        message = 'Venerdì';
        break;
    case 6:
        message = 'Sabato';
        break;
    case 7:
        message = 'Domenica';
        break;
    default:
        message = "Non hai inserito un numero valido";
}

console.log(message);