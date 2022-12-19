const Toy = require('../../models/toy');

module.exports = {
  index,
  create,
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

async function create(req, res) {
    req.body.user = req.user._id;
    console.log(req.body)
    const donation = await Toy.create(req.body);
    res.json(donation);
  }