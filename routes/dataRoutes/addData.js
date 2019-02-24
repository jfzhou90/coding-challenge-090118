const People = require('../../models/people');
const mongoose = require('mongoose');

module.exports = (request, response) => {
  let { first_name, last_name, home} = request.body

  person = new People({
    first_name: first_name,
    last_name: last_name,
    home: home
  })

  person.save((err)=>{
    if(err) {
      throw err;
      return response.status(400)
    }
  });

  response.send(person)
}