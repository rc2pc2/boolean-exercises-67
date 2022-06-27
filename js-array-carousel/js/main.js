/**
 *  Consegna:
Dato un array contenente una lista di sei immagini (url), creare un carosello come nello screenshot allegato.

MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.

Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

MILESTONE 3
Al click dell'utente sui bottoni/frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

BONUS 2:
Aggiungere la visualizzazione thumbnails, realizzate a piacere (pallini o miniature). Tutte le thumbnails avranno una classe inattiva, tranne quella corrispondente all’immagine attiva, che invece avrà una classe attiva (che la distinguerà con un bordo, un colore, ecc).
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
 */

/**
 *
 *     // const imageToHide = imageElements[activeImageIndex];

    // prendo l'immagine attiva =>  .carousel-image-container img.active
    // const activeImage = document.querySelector('.carousel-image-container img.active ');
    imageElements[activeImageIndex].classList.remove('active');

    //  activeImageIndex = activeImageIndex + 1;
    activeImageIndex++;

    // se arrivo alla fine della lista ricomincio da zero
    if (activeImageIndex === images.length) {
        activeImageIndex = 0;
    }

    // prendo l'immagine all'indice attuale e le aggiungo la classe active per renderla visibile
    imageElements[activeImageIndex].classList.add('active');

    // console.log(imageElements);
 *
 */

const images = [
    'https://cdn.photographycourse.net/wp-content/uploads/2022/04/Portrait-vs-Landscape-Featured-Image-3.jpg',
    'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg',
    'https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
    'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
    'https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg',
    'https://mymodernmet.com/wp/wp-content/uploads/2020/02/Landscape-Photographer-of-the-Year-Sander-Grefte.jpg'
    ];

let activeImageIndex = 4;

// recupero il parent all'interno del quale inserire le immagini
const imagesWrapper = document.querySelector('.carousel-wrapper .carousel-image-container');
// console.log(imagesWrapper);

// recupero il parent all'interno del quale inserire le thumbnails
const thumbnailsWrapper = document.querySelector('.carousel-wrapper .thumbnails-container');

// # cicliamo per la lunghezza dell'array di immagini chiamato images
for (let index = 0 ; index < images.length ; index++){

    // creo un elemento di tipo immagine
    const currentImage = document.createElement('img');

    // creo un elemento di tipo immagine
    const currentThumbnail = document.createElement('i');

    // gli attribuisco le proprietà che ritengo necessarie
    currentImage.setAttribute('src', images[index]);
    currentThumbnail.classList.add('fa-solid', 'fa-circle');


    if (index === activeImageIndex){
        currentImage.classList.add('active');
        currentThumbnail.classList.add('active');
    }

    // lo aggiungo al parent
    imagesWrapper.append(currentImage);
    thumbnailsWrapper.append(currentThumbnail);

    // if ( index === activeImageIndex ){
    //     imagesWrapper.innerHTML += `<img class="active" src="${images[index]}" alt="Landscape picture"></img>`
    // } else {
    //     imagesWrapper.innerHTML += `<img src="${images[index]}" alt="Landscape picture"></img>`
    // }
}

const prevButton = document.getElementById('prev-button');
const nextButton = document.querySelector('#next-button');

// recupero la lista delle immagini disponibili nel carosello
const imageElements = document.querySelectorAll('.carousel-image-container img');

// recupero la lista delle thumbnails disponibili nel carosello
const thumbnailElements = document.querySelectorAll('.carousel-wrapper .thumbnails-container i');
console.log(thumbnailElements);

// devo aggiungere un comportamento conseguente ad un'interazione con i bottoni relativi

nextButton.addEventListener('click', function(){
    // prendo l'immagine attiva =>  .carousel-image-container img.active
    imageElements[activeImageIndex].classList.remove('active');
    thumbnailElements[activeImageIndex].classList.remove('active');

    //  activeImageIndex = activeImageIndex + 1;
    activeImageIndex++;

    // se arrivo alla fine della lista ricomincio da zero
    if (activeImageIndex === images.length) {
        activeImageIndex = 0;
    }

    // prendo l'immagine all'indice attuale e le aggiungo la classe active per renderla visibile
    imageElements[activeImageIndex].classList.add('active');
    thumbnailElements[activeImageIndex].classList.add('active');
});


prevButton.addEventListener('click', function(){
    // prendo l'immagine attiva =>  .carousel-image-container img.active
    imageElements[activeImageIndex].classList.remove('active');
    thumbnailElements[activeImageIndex].classList.remove('active');

    //  activeImageIndex = activeImageIndex - 1;
    activeImageIndex--;

    if (activeImageIndex === -1) {
        activeImageIndex = images.length - 1;
    }

    // prendo l'immagine all'indice attuale e le aggiungo la classe active per renderla visibile
    imageElements[activeImageIndex].classList.add('active');
    thumbnailElements[activeImageIndex].classList.add('active');
});
