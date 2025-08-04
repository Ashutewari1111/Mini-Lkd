const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Post = require('../models/Post');

router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  const posts = await Post.find({ author: user._id }).sort('-createdAt');
  res.json({ user, posts });
});

module.exports = router;


