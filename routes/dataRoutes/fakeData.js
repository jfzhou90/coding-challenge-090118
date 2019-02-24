const People = require('../../models/people');
const mongoose = require('mongoose');
const data = require('../../data/data');

module.exports = (request, response) => {
  data.forEach(data => {
    person = new People({
      first_name: data.first_name,
      last_name: data.last_name,
      home: data.home
    })

    person.save((err)=>{
      if(err) {
        throw err;
        return response.status(400).send("Error")
      }
    });
  })

  response.send("Saved")
}