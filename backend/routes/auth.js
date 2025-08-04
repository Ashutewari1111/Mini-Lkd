const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register
router.post('/register', async (req, res) => {
  const { name, email, password, bio } = req.body;

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashed, bio });
  res.json(user);
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ id: user._id }, 'secret');
  res.json({ token, user: { id: user._id, name: user.name, email: user.email, bio: user.bio } });
});

module.exports = router;



