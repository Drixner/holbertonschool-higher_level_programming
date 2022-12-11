#!/usr/bin/node
// Script that computes and prints a factorial

const process = require('process');
const args = process.argv;
const Num = parseInt(args[2]);

function factorial (Num) {
  // if number is 0 or NaN (Not a Number) --> exit of recursion
  if (Num === 0 || isNaN(Num)) {
    return 1;
  } else { // Call recursive function
    return Num * factorial(Num - 1);
  }
}
console.log(factorial(Num));
