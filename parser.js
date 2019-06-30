function Parser() {
  this.denominations = [
    { name: 'Dollars', value: 100 },
    { name: 'Quarters', value: 25 },
    { name: 'Dimes', value: 10 },
    { name: 'Nickels', value: 5 },
    { name: 'Pennies', value: 1 }
  ];
}

/**
 * Function to determine whether the input string
 */
Parser.prototype.isValidInput = function(dollarString) {
  'use strict';
  let regex = /^\$?([0-9]+)?(\.[0-9][0-9])?$/;
  return regex.test(dollarString);
}

/**
 * Function to get the minimum number of coins given a dollar amount.
 * The function returns a client-friendly string.
 */
Parser.prototype.getCoinSetForDollars = function(dollars) {
  'use strict';
  // Strip off the leading dollar-sign if it was provided.
  if(dollars[0] == "$") {
    dollars = dollars.substring(1);
  }
  let cents = parseFloat(dollars) * 100; // Dealing in cents is easier given the constraints.
  let resultSet = {};
  // Base case, don't bother looping through if you don't have any change.
  if(cents == 0) {
    return resultSet;
  }
  for(let i = 0; i<this.denominations.length; i++) {
    let coin = this.denominations[i];
    let count = Math.floor(cents / coin.value); // How many of this coin?
    cents = cents % coin.value; // What's leftover for the next coin.
    if(count > 0) {
      resultSet[coin.name] = count;
    }
  }
  return resultSet;
};

module.exports = new Parser();
