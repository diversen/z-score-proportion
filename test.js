var zTableProportion = require('./index')

/**
 * E.g: A set of shirt prices are normally distributed with a mean of 45
 * dollars and a standard deviation of 5 dollars. What proportion of shirt
 * prices are between 37 dollars and 59.35? You
 * may round your answer to four decimal places.
 */
console.log(zTableProportion(45, 5, 59.35, 37))

// You may not need the lower limit
console.log(zTableProportion(45, 5, 59.35))