const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

 mongoose.connect(process.env.MONGO_URI)
 .then(() => {console.log('MongoDB connected locally!')})
 .catch(err => console.error('Connection error:', err));

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/posts', require('./routes/post'));
app.use('/api/users', require('./routes/user'));

app.listen(5000, () => console.log('Backend running on 5000'));

// module.exports = app;




