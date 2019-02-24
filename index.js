'use strict'
// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys')

// Modules
const middleware = require('./middlewares/middlewares');
const routes = require('./routes');

// Database
mongoose.connect(keys.mongoURI, { useNewUrlParser: true })

// Creates express app
const app = express();

// Middlewares for the app
middleware(app);

// Routes for the app
routes(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
};

const PORT = process.env.PORT || 5000
app.listen(PORT);
console.log(`Server running, listening to port ${PORT}`);