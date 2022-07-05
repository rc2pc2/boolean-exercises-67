const app = new Vue(
    {
        el: '#app',

        data: {
            booleano : true,

            listaDiCose : [
                'pasta',
                'riso',
                'carote',
                'basilico',
                'pomodorini',
                'motosega',
                'amplificatore'
            ]
        },

        methods: {
            log: function( ...args) {
                console.log(args);
            },

            updateBooleano () {
                this.booleano = !this.booleano;
            },
        },

        created(){
            //  codice eseguito una volta sola dopo il reload
        },
    }
);