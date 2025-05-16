const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  image: {
    type: String,
  },
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog; 