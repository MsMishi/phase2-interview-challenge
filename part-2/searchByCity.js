const fs = require('fs')
const clients = require('./clients.json')
const searchString = process.argv[2]
const results = []

clients.forEach(function(person) {
  const id = person.id
  const rep_name = person.rep_name
  const company = person.company
  const city = person.city
  const state = person.state

  if(city.toUpperCase() === searchString.toUpperCase()) {
    results.push({id, rep_name, company, city, state})
  }
})
console.log('Finding clients in City "' + searchString + '"...')
console.log(results)
