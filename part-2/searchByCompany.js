const fs = require('fs')
const clients = require('./clients.json')
const searchString = process.argv[2]
const results = []

clients.forEach(function(query) {
  const id = query.id
  const company = query.company
  const phone = query.phone
  const strLength = searchString.length
  let stringMatch = company.slice(0, strLength)

  if(searchString === stringMatch) {
    results.push({id, company, phone})
  }
})
console.log('Finding companies with name "' + searchString + '"...')
console.log(results)
