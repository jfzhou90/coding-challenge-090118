const People = require('../../models/people');
const mongoose = require('mongoose');
const data = require('../../data/data')

module.exports = (request, response) => {
  People.find({}).exec((error, people) => {
    if (error) {
        return response.status(400).send("Nobody found");
    }
    response.send(people)
  })
}