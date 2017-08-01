const fs = require('fs')
const clients = require('./clients.json')
const searchString = process.argv[2]
const results = []

clients.forEach(function(query) {
  const id = query.id
  const company = query.company
  const phone = query.phone

  if(company.indexOf(searchString) > -1) {
    results.push({id, company, phone})
  }
})
console.log('Finding companies with name "' + searchString + '"...')
console.log(results)
