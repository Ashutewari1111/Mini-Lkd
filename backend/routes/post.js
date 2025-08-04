const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');

// Create post
router.post('/', async (req, res) => {
  const { authorId, content } = req.body;
  const post = await Post.create({ author: authorId, content });
  res.json(post);
});


// Get all posts
router.get('/', async (req, res) => {
  const posts = await Post.find().populate('author', 'name').sort('-createdAt');
  res.json(posts);
});

module.exports = router;

