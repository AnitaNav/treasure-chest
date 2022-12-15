require('dotenv').config();
require('./config/database');

const Toy = require('./models/toy');

(async function() {

    await Toy.deleteMany({});
    const toys = await Toy.create([
      {name: 'Rattle', image: 'https://d1jqecz1iy566e.cloudfront.net/large/fa233.jpg'},
      {name: 'Rattle Ball', image: 'https://d1jqecz1iy566e.cloudfront.net/large/fa233.jpg'},
      {name: 'Laugh and Learn Puppy', image: 'https://d1jqecz1iy566e.cloudfront.net/large/fa233.jpg'},
    ]);
  
    console.log(toys)
  
    process.exit();
  
  })();
  