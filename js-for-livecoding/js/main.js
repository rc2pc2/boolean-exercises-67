
// voglio popolare un ul e fare in modo che abbia 5, 10 o magari 20 li diversi.

// voglio scrivere i primi dieci numeri

// voglio ripetere per 4 volte un blocco di codice

// | alla prima esecuzione avrò il valore definito all'inizio del ciclo,
// | e verifico che la condizione iterativa sia valida (anche al primo ciclo)
// | poi al termine di ogni ciclo eseguo l'operazione iterativa
// | se ancora è valida la condizione iterativa, dopo l'operazione, allora
// | eseguo un altro ciclo, finché
// | la condizione iterativa non è rispettata.

// ? prendo una variabile che inizializzo a 0 =>  let i = 0
// § finché la condizione i < 10 è rispettata ed è valida
// # aggiungo alla variabile i una unità, i = i + 1 => i++;
for ( let index = 0; index < 4 ; index = index + 1){
    // ripeterò quello che è scritto all'interno di questo blocco per 10 volte;
    // console.log(index);
}

 // ? se uso index = index + 1 => index++ => allora ho bisogno che index sia definita come let
// console.log(index) // Undefined, perché index è definita in un blocco e pertanto in questo contesto non è definita.


// I) prima iterazione i = 0, domanda: è i < 4? quindi entro ed eseguo il codice
// II) seconda iterazione i = 1, domanda: è i < 4? quindi entro ed eseguo il codice
// III) alla terza iterazione i = 2, domanda: è i < 4? quindi entro ed eseguo il codice
// IV) alla quarta iterazione i = 3, domanda: è i < 4? quindi entro ed eseguo il codice
// V) alla quinta iterazione i = 4, domanda: è i < 4? No! => esco dal ciclo


// const ulElement = document.querySelector('main ul.list');

// for (let index = 0; index < 15 ; index++) {
//     // ulElement.innerHTML += "<li>" + index + "</li>";
//     const liElement = document.createElement('li');
//     liElement.innerHTML = index;

//     ulElement.append(liElement);
// }

// const catsSelect = document.querySelector('main select#select-cats');

// for (let i = 0 ; i < 15 ; i++){
//     const optionToAppend = document.createElement('option');
//     optionToAppend.innerHTML = "Gattino numero " + i;
//     optionToAppend.value = i;

//     catsSelect.append(optionToAppend);
// }

const numberWrapperRow = document.getElementById('number-wrapper');

//number-wrapper

for (let index = 1; index <= 100 ; index++) {

    // ? creiamo un nuovo div vuoto e lo assegnamo a una variabile flashyBox
    const flashyBox = document.createElement('div');

    // § aggiungiamo a questo div due classi: col-2 e box
    flashyBox.classList.add('col-2', 'box');

    // # aggingiamo il contenuto testuale all'interno del div
    flashyBox.innerHTML = index;

    // flashyBox.addEventListener('click', function(){
    //     console.log("Hai cliccato il box nummero: "+ index);
    // });

    // ? index % 2 => il resto della divisione tra index e 2
    // § per capire se il numero index è divisbile per il numero 2, allora controllo che il index % (modulo) 2 sia uguale a 0.
    // | console.log(index % 2 == 0);

    numberWrapperRow.append(flashyBox);
}

