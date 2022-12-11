#!/usr/bin/node
// Write a script that prints My number: <first argument converted in integer>
// isNan --> https://www.w3schools.com/jsref/jsref_isnan_number.asp#:~:text=In%20JavaScript%2C%20NaN%20is%20short,the%20type%20is%20a%20Number.

const process = require('process');
const args = process.argv;

if (isNaN(args[2]) === true) {
  console.log('Not a number');
} else {
  console.log('My number: ' + args[2]);
}
