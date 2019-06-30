'use strict';
// parser has the bulk of the logic.
let parser = require('./parser');

// Step 0: Check if we have the right number of arguments.
if(process.argv.length === 3 && process.argv[2] != null) {
  // 1. Ensure the input is valid.
  if(parser.isValidInput(process.argv[2])) {
    console.log(parser.getCoinSetForDollars(process.argv[2]));
  } else {
    console.log("Invalid dollar amount. Please use an input like 1.25 or \\$1.25...e.g. node index \\$1.25\nRemember to backslash your dollar-sign.")
  }
} else {
  console.log('The correct way to run the program is: node index <dollar_amount>');
}
