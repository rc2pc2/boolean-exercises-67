const app = new Vue(
    {
        el: '#app',

        data: {
            message : 'Ciao io sono vue',

            imageSrc : 'https://miro.medium.com/max/855/1*9A5EFag9rsRWjWswxlZ4hA.png',

        },

        methods: {
            log: function( ...args) {

                console.log(args);
            },

            updateImageSrc: function( source ){
                this.imageSrc = source;
            }
        }
    }
);

