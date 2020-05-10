const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

//middleware - this is applied to every route that is run through
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//import routes - this just splits up the routes into seperate files
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);
// app.use('/user', userRoute);

// connect to DB
mongoose.connect(process.env.DB_CONNECTION,
  () => console.log('connected to db')
);

//
app.listen(3000);