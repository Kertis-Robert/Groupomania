const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    userId: { type: String },
    name:{ type: String },
    imageUrl: { type: String, required: true },
    comments:{ type: String, required: true },
    likes:{type: Number, default: 0 },    
    usersLiked:[String],
    created_at:{type: Date, default: Date.now },
    updated_at:{ type: Date, default: Date.now }
   
    
  }
  );
 
  
           
  module.exports = mongoose.model('Post', postSchema);


