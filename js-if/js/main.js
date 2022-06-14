
// const condition = 3 === "3";
// console.log(condition);

// if (3 === "3") {
//     console.log('sono uguali');
// } else {
//     console.log('non sono uguali');
// }

const userWord = prompt('Scrivi una parola qualsiasi');
// console.warn(typeof userWord.length);

//  se la parola è più lunga di cinque caratteri ... parola lunga
//  in tutti gli altri casi ... parola breve


// ? se la parola inserita ha un numero di caratteri superiore a 5
if ( userWord.length >= 5 ) {
    // ? e se la parola è = a 'parola'
    if (userWord == 'parola'){
        // ? allora scrivi Hai scritto parola in console
        console.log('Hai scritto parola!');

    // § altrimenti (ovvero se la parola è ancora più lunga di cinque carattere ma non è uguale a parola)
    } else {
        // § allora scrivi parola lunga
        console.log("parola lunga");
    }

// # altrimenti se la parola è lunga esattamente tre caratteri
} else if( userWord.length === 3){
    // # scriviamo che la parola è lunga 3 caratteri esatti
    console.log('la parola è lunga 3 caratteri esatti');

// | altrimenti in tutti gli altri casi
} else {
    // | scrivi che la parola è breve
    console.log("parola breve");
}
