
// // ? esegui la funzione scriviQualcosa una volta sola, al trascorrere di 3000 millisecondi.
// setTimeout( function(){
//     console.log('Funzione anonima');
// }, 500);



// console.log('ciaone');
// console.log('ciaone2');
// console.log('ciaone3');
// console.log('ciaone4');


// function scriviQualcosa(){
//     // const box = document.createElement('div');
//     // box.classList.add('box');
//     // document.querySelector('div.col-12').append(box);
//     console.log('Butta la pasta!!');
// }

// // § il setInterva richiede di essere assegnato ad una variabile per poter essere interrotto
// // const clock = setInterval( function(){}, 2000);
// let counter = 0;


// function controllaTemperatura(num1, num2){
//     const randomNum = Math.floor(Math.random() * (36 - 25) + 25);
//     console.log(randomNum);
//     return randomNum;
// }

// console.log(controllaTemperatura);

// let seconds = parseInt ( prompt ( 'Quanto manca alla cottura della pasta?' ));

// seconds = ( seconds > 5) ? 10 : seconds;

// setTimeout( function(){
//     alert('Scola la pasta!');
// } , seconds * 1000 );

// let seconds = 10;
// const output = document.getElementById('output-pre');
// output.innerHTML = seconds;


// // ? prima soluzione usanto una condizione nel setInterval
// // const clock = setInterval( function(){
// //     seconds--;
// //     // decremento di uno
// //     // controllo se sono arrivato a zero
// //         // se si => cancello il conteggio
// //     output.innerHTML = seconds;

// //     if ( seconds === 0 ) {
// //         clearInterval(clock);
// //     }

// // }, 1000);



// const clock = setInterval (function(){
//     output.innerHTML = --seconds;
// }, 1000);

// // clearInterval(clock)
// setTimeout( clearInterval, seconds * 1000 + 200, clock);

const output = document.getElementById('output-pre');

const startButton = document.querySelector('.btn-start');
const pauseButton = document.querySelector('.btn-pause');
console.log(startButton);

let clock;

startButton.addEventListener('click', function(){
    // output.innerHTML = 0.00;
    console.log('inizia');
    clock = setInterval( function(){
        output.innerHTML = (parseFloat(output.innerHTML) + 0.01).toFixed(2);
    }, 10);
});

pauseButton.addEventListener('click', function(){
    console.log('Stoppa');
    clearInterval(clock);
});


