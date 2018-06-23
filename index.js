var zTable = require('ztable')

/**
 * Calculates proportion of a normal distribution
 * From mean, deviation, upper limit and lower limit
 * @param {*} mean float 
 * @param {*} deviation float
 * @param {*} upper float
 * @param {*} lower float
 */
function zScoreProportion (mean, deviation, upper, lower) {

    var tableLower = 0;
    if (lower) { 
        zLower = (lower - mean) / deviation;
        tableLower = zTable(zLower)
    }
    
    var zUpper = (upper - mean) / deviation;
    var tableUpper = zTable(zUpper)

    return tableUpper - tableLower;

}

module.exports = zScoreProportion
