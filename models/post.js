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
    text : {type: String, required: true},
    comments: [commentSchema],
    user : {type: Schema.Types.ObjectId,ref: "User", required: true},
    userName: {
      type: String
    },
    
  }, {
    timestamps : true
  });
  
  module.exports = mongoose.model('Posts', postsSchema);