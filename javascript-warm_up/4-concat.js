#!/usr/bin/node
// Script that prints two arguments passed to it, in the following format: “ is ”

const process = require('process'); // agrego el modulo process
const args = process.argv; // defino args como process.argv

console.log(args[2] = 'is' + args[3]);
