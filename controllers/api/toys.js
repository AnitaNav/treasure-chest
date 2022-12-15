const Toy = require('../../models/toy');

module.exports = {
  index,
};

async function index(req, res) {
    try {
        // console.log('hello index');
        const toys = await Toy.find({}) 
         res.status(200).json(toys);
    } catch (err) {
        // console.log(err);
        res.status(500).json(err)
    }
} 