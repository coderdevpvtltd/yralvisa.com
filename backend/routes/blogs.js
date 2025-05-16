const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

// GET all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET one blog
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog == null) {
      return res.status(404).json({ message: 'Cannot find blog' });
    }
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// CREATE a blog
router.post('/', async (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    author: req.body.author,
    content: req.body.content,
    date: req.body.date,
    image: req.body.image,
  });

  try {
    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// UPDATE a blog
router.patch('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog == null) {
      return res.status(404).json({ message: 'Cannot find blog' });
    }

    if (req.body.title != null) {
      blog.title = req.body.title;
    }
    if (req.body.author != null) {
      blog.author = req.body.author;
    }
    if (req.body.content != null) {
      blog.content = req.body.content;
    }
    if (req.body.date != null) {
      blog.date = req.body.date;
    }
     if (req.body.image != null) {
      blog.image = req.body.image;
    }

    const updatedBlog = await blog.save();
    res.json(updatedBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a blog
router.delete('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
     if (blog == null) {
      return res.status(404).json({ message: 'Cannot find blog' });
    }
    await Blog.deleteOne({ _id: req.params.id });
    res.json({ message: 'Deleted blog' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router; 