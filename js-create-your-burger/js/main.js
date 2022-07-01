// abbiamo recuperato il nostro bottone di generazione
const generatorBtn = document.getElementById('button');

generatorBtn.addEventListener( 'click',  function(event) {
    const selects = document.querySelectorAll('.ingredient-checkbox');

    let price = 4;

    selects.forEach( element => {
        if (element.checked && !isNaN(element.value)){
            price += parseInt( element.value);
        }
    });

    console.log(price);

    price = price * getCouponDiscount(document.getElementById('coupon').value);

    emitPrice(price);

});


function emitPrice(price){
    document.getElementById('price').innerHTML = price;
}

function getCouponDiscount(coupon){

    const twentyCoupons = [
        'VOGLIOVIVERECOSI',
        'ABBRONZATISSIMISSIMA',
        'IMAGINEALLTHEPEOPLE',
        'LUIGIMICCOTHEBEST'
    ];

    const thirtyCoupons = [
        'VITOHASTHEBESTBEACH',
        'FRANCESCONONVAMAIINPANICO',
        'SIGNORBOSIOBUONGIORNO',
        'BESTBAFFOGOESTOCASANOVA'
    ]


    if (twentyCoupons.includes(coupon) ) {
        return 0.8;
    } else if (thirtyCoupons.includes(coupon) ) {
        return 0.65;
    } else if (coupon != "") {
        return 2;
    }
    return 1;
}