let month = (date) => {
  if(!(date instanceof Date)) {
    return 'Please enter a real date in year, month day format.'
  }
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  let monthOfYear = months[date.getMonth()]
  return monthOfYear
}

/*-----------------------------------------------------------------*/
let reverseSentence = (string) => {
  if(typeof string !== 'string'){
    return 'Please enter an actual string.'
  }
  const reversal = string.split(/\s+/)
    .reverse()
    .join(' ')
    return reversal
}

/*-----------------------------------------------------------------*/
let nameProps = (obj) => {
  if(typeof obj !== 'object') {
    return 'Please enter a valid object.'
  }
  let names = []
  for (prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      names.push(prop)
    }
  }
  return names.sort()
}

/*-----------------------------------------------------------------*/
let filterBetween = (array, min, max) => {
  if(typeof min !== 'string' || typeof max !== 'string'){
    return 'Please enter an array of strings and two different addiitional strings.'
  }
  let filtered = array.filter(function(x) {
    return x >= min && x <= max
  })
  return filtered
}


/*-----------------------------------------------------------------*/

module.exports = {
  month,
  reverseSentence,
  nameProps,
  filterBetween
}
