const mongoose = require('mongoose');

const toySchema = require('./toySchema');

module.exports = mongoose.model('Toy', toySchema);