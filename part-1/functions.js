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




module.exports = {
  month,
  // reverseSentence,
  // nameProps,
  // filterBetween
}
