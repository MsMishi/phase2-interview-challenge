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
  let names = Object.keys(obj)
}


/*-----------------------------------------------------------------*/



/*-----------------------------------------------------------------*/

module.exports = {
  month,
  reverseSentence,
  nameProps,
  // filterBetween
}
