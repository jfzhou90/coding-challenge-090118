const mongoose = require('mongoose');
const { Schema } = mongoose;

const peopleSchema = new Schema({
  first_name: String,
  last_name: String,
  home: String
});

const People = mongoose.model('people', peopleSchema);

module.exports = People;