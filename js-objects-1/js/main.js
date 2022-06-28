
const gattino = {
    nome: 'grace',
    pelo: 'corto',
    "età" : 4,
    peso : 5,
    crocchette : 'secche',
    colore: 'arancione tigrato',
};




console.log( gattino['pelo'] );
console.log( gattino.pelo );

// /**
//  * /*
//  * Crea 10 oggetti che rappresentano un peperone,
//  * indicandone per ognuno varietà, peso e lunghezza.
//  * Calcola quanto pesano tutti i peperoni.
//  */


const peperoni = [
    {
        varietà : 'peperone nano',
        peso : 0.5,
        lunghezza: "20cm",
        regione: {
            nome: 'veneto',
            superficie: 5524,
        }
    },
    {
        varietà : 'peperone jalapeno',
        peso : 5,
        lunghezza: "15cm",
        regione: {
            nome: 'sicilia',
            superficie: 2524,
        }
    }
];


let sommaPesoLunghi = 0;
let sommaPesoMenoLunghi = 0;

const peperoniLunghi = [];
const peperoniMenoLunghi = [];

for ( let i = 0 ; i < peperoni.length ; i++){
    const lunghezzaPeperone = parseInt ( peperoni[i].lunghezza );

    if ( lunghezzaPeperone > 15){
        peperoniLunghi.push(peperoni[i]);
        sommaPesoLunghi += peperoni[i].peso;
    } else {
        peperoniMenoLunghi.push(peperoni[i]);
        sommaPesoMenoLunghi += peperoni[i].peso;
    }

    console.log(peperoni[i].regione.nome);
}

// console.log(peperoniLunghi, sommaPesoLunghi);
// console.log(peperoniMenoLunghi, sommaPesoMenoLunghi);

// const title = document.querySelector('h1');
// title.addEventListener('click', () => {
//     console.log("cliccami");
// })


