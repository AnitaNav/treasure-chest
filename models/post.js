const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: {
      type: String,
      required: true
  },
  user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
  },
}, {
  timestamps: true
});


const postsSchema = new Schema({
    title: {type: String, required: true},
    text : {type: String, required: true},
    image: {type: String},
    comments: [commentSchema],
    user : {type: Schema.Types.ObjectId,ref: "User", required: true},
    
  }, {
    timestamps : true
  });
  
  module.exports = mongoose.model('Posts', postsSchema);