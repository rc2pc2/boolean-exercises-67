// const app = new Vue(
//         {
//             el: '#root',

//             data: {
//                 // § ciao io mi chiamo cesco e sono connesso con l'input: quindi se l'utente mi cambia il kgb cambia il valore anche a questa variabile
//                 imgSourceInput : "" ,

//                 // # ciao io sono nannarella e sono connesso con l'src dell'immagine della card,
//                 imgSource : "" ,
//             },

//             methods: {
//                 scriviQualcosina: function() {
//                     // ? per accedere ai data da un methodo devo prima inserire la keyword this.
//                     console.log(`Ciao ${this.firstName}!!`);
//                 },

//                 updateImgSource(){
//                     this.imgSource = this.imgSourceInput;
//                     return;
//                 }
//             }
//         }
//     );


const app = new Vue(
    {
        el: '#root',
        data: {
            classesToAdd : 'text-danger fw-bold text-end text-decoration-line-through',
        }
    }
);