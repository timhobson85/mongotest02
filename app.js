const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);
// app.use('/user', userRoute);

// connect to DB
mongoose.connect(process.env.DB_CONNECTION,
  () => console.log('connected to db')
);

//
app.listen(3000);