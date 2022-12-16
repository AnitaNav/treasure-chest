require('dotenv').config();
require('./config/database');

const Toy = require('./models/toy');

(async function() {

    await Toy.deleteMany({});
    const toys = await Toy.create([
      {name: 'Rattle', image: 'https://m.media-amazon.com/images/I/61lPD5vMWrL.jpg'},
      {name: 'Rattle Ball', image: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71m9d+ZD9JL._SX569_.jpg'},
      {name: 'Laugh and Learn Puppy', image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6356/6356764_sd.jpg'}
    ]);
    console.log(toys)
  
    process.exit();
  
  })();
  