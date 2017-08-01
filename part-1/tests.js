const expect = require('chai').expect
const {month, reverseSentence, nameProps, filterBetween} = require('./functions.js')

describe('month(date)', function() {
  it('should return the month for a given date', function() {
    let date = new Date(2017, 5, 19)
    expect(month(date)).to.equal('June')
  })
  it('should return the correct month for a given date', function() {
    let christmas = new Date(2017, 11, 25)
    expect(month(christmas)).to.equal('December')
  })
  it('should return an error for invalid inputs', () => {
    expect(month(4,'March', 45.7)).to.equal('Please enter a real date in year, month day format.')
  })
})

describe('reverseSentence(string)', function() {
  it('should return a string with words in reverse order', function() {
    expect(reverseSentence('The cat jumped over the dog.')).to.equal('dog. the over jumped cat The')
  })
  it('should return the string if there is only one word', function() {
    expect(reverseSentence('Hello')).to.equal('Hello')
  })
  it('should return an error for invalid inputs', function() {
    expect(reverseSentence([23, 'rollercoaster'])).to.equal('Please enter an actual string.')
  })
})

describe('nameProps(obj)', function() {
  it('should return the names of an objects properties in alphabetical order', function() {
    let friend = {
      name: 'Dominique',
      age: 30,
      phone: '555-555-5555'
    }
    expect(nameProps(friend)).to.deep.equal(['age', 'name', 'phone'])
  })
  it('should return only the "own properties" of the object', function() {
    expect(nameProps({})).to.deep.equal([])
  })
  it('should return an error for invalid inputs', function() {
    expect(nameProps(25,['meat', 'beans', 'greens'])).to.deep.equal('Please enter a valid object.')
  })
})

describe('filterBetween(array, min, max)', function() {
  it('should return a new array of strings from the given array', function() {
    let arr = ['dog', 'cat', 'zebra', 'ape', 'lion', 'cow']
    expect(filterBetween(arr, 'deer', 'giraffe')).to.deep.equal(['dog'])
    expect(filterBetween(arr, 'chimp', 'lobster')).to.deep.equal(['dog', 'lion', 'cow'])
  })
  it('should only return the elements that come after min and before max alphabetically', function() {
    let arr = ['dog', 'cat', 'zebra', 'ape', 'lion', 'cow']
    expect(filterBetween(arr, 'chickadee', 'chimpanzee')).to.deep.equal([])
  })
  it('should retun an error for invalid inputs', function() {
    expect(filterBetween('zebra', 17)).to.deep.equal('Please enter an array of strings and two different addiitional strings.')
  })
})
