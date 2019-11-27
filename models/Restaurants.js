const mongoose = require('../db/connection');

const PostSchema = new mongoose.Schema({
  username: String,
  message: String,
  tag: String,
  createdAt: { type: Date, default: Date.now }
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
