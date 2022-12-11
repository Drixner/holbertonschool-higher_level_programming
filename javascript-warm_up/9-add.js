#!/usr/bin/node
// Script that prints the addition of 2 integers
//

const process = require('process');
const args = process.argv;
const a = parseInt(args[2]);
const b = parseInt(args[3]);

function sum (a, b) {
  return (a + b);
}

console.log(sum(a, b));
