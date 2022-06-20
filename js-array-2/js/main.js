// const array = [];

// // array = ['ciao'];

// array.push('ciao'); // array = ['ciao']

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2); // ['a', 'b', 'c', 'd', 'e', 'f'];

// console.log(array3);

// // array3[2] = 'x'

// // ? splice ( indiceDiPartenza, quantiElementiRimuovere, eventualiElementiDaAgggiungereAlPostoDiQuelliRimossi)
// array3.splice(2, 3, 'x', 'y', 'z', 'w');

// console.log(array3);


/**
 *
 * Snack 1
 * L'utente inserisce due numeri in successione, con due Prompt. Il software stampa il maggiore. (Se sono uguali? => scegliete voi)
 *
 */

// const userFirstNumber = parseInt( prompt('insert a number') ) ;
// const userSecondNumber = parseInt( prompt('insert a number') ) ;

// if (userFirstNumber > userSecondNumber) {
//     console.log('The first number is greater than the second');
// } else if ( userSecondNumber > userFirstNumber) {
//     console.log('The second number is greater than the first');
// } else if ( userFirstNumber === userSecondNumber){
//     console.log('The numbers are equals');
// } else {
//     console.log('One of numbers (or both) is wrong');
// }

// // # Il software deve chiedere per 10 volte all'utente di inserire un numero, il programma stampa la somma di tutti i numeri inseriti e la media.

// const numberList = [];
// let sum = 0;

// for (let index = 0; index < 3 ; index++){
//     const userNumber = parseInt( prompt('insert a number') );
//     numberList.push(userNumber);
//     sum = sum + userNumber;
// }

// let average = sum / numberList.length;

// console.log(sum, average);
// console.log(numberList);

// Dobbiamo implementare un carosello

// è un elemento html all'interno del quale viene visualizzata in maniera alternativa una serie di immagini
//

// abbiamo quattro immagini
// due bottoni per scorrerle -> next e <- previous
// quando scorro per una nuova immagine, nascondo l'attuale e mostro quella successiva


// prendo tutte le immagini figlie di carousel-image-container
// le salvo in un array (o come se lo fosse)

// devo aggiungere l'event listener:
    // al bottone next, sul click, viene aggiunta la classe active all'immagine successiva
    // dobbiamo rimuovere l'active da quella precedente

const giveImgs = ['httwdnmqiowd.jpg', 'dnmqwiodnqwiodnqwd.jpg', 'dqwiodnqwiodqwd.png'];

let activeElementIndex = 0;

const imgsWrapper = document.querySelector('.carousel-wrapper .carousel-image-container');
const imgList = imgsWrapper.children;

// § creo l'elemento html di tipo img
const newImg = document.createElement('img');

// # aggiungo le classi che voglio che questo abbia
newImg.classList.add('classe-mia');

// ? cambio l'src dell'immagine => .setAttribute(quale attributo, contenuto dell'attributo)
newImg.setAttribute('src', 'https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg');

// | aggiungo l'immagine creata alla lista
imgsWrapper.append(newImg);

imgList[activeElementIndex].classList.add('active');

// quando premo un bottone, prendo l'immagine attuale e la nascondo e mostro la successiva

// | prendo il bottone "next"
const btnNext = document.getElementById('next-button');

btnNext.addEventListener('click', function(){
    // ? rimuovo active all'immagine attuale
    imgList[activeElementIndex].classList.remove('active');
    // document.querySelector('img.active').classList.remove('active');

    // ? scorro di un posto l'elemento attivo
    // activeElementIndex = activeElementIndex + 1;
    activeElementIndex++;

    // § se siamo alla fine dell'array, non uscire ma ricomincia dal primo elemento della lista.
    if (activeElementIndex === imgList.length){
        activeElementIndex = 0;
    }

    // ? aggiungo la classe active al nuovo elemento attivo
    imgList[activeElementIndex].classList.add('active');
    // document.querySelectorAll('.carousel-image-container img')[activeElementIndex].classList.add('active');

    console.log('Cliccato! L\'elemento adesso attivo è in posizione: ' + activeElementIndex);
});

// console.log(document.querySelectorAll('.carousel-image-container img'));
