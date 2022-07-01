
/**
 *
 * prodotto: nome, descrizione, prezzo, categoria, immagine, likes
 *
 */

class Product {

   constructor(name, description, price, category, image, likes){
      this.name = name;
      this.description = description;
      this.price = price;
      this.category = category;
      this.image = image;
      this.likes = likes;
   }

   addLike(){
      this.likes = this.likes + 1;
   }

}


const portatile = new Product('Pear Docbook pro', 'Il pc più lento di sempre!', 855.5, 'laptop', '', 2);

const tavolo = new Product('Tavolino da tè', 'Basso quando me', 13.5, 'mobilia', '');

// console.log(portatile);
console.log(tavolo);




// portatile.addLike();
// // tavolo.addLike();


// // console.log(portatile);
// // console.log(portatile);

console.warn(document.getElementById);