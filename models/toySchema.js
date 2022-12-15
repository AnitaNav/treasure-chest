const Schema = require('mongoose').Schema;

const toySchema = new Schema({
  name: { type: String, required: true },
  image: String,
}, {
  timestamps: true
});

module.exports = toySchema;
