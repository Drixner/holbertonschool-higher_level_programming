#!/usr/bin/node
// Write a script that prints a message
// depending of the number of arguments passed:

const process = require('process'); // Se agrega el modulo process
const args = process.argv; // se iguala a una varible const 'args' 

if (args.length <= 2) { // Se considera 2 ya pertenece parametro extra.
  console.log('No argument');
} else if (args.length == 1) {
  console.log('Argument found');
} else {
  console.log('Argument found');
}
