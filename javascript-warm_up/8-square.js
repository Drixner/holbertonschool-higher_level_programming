#!/usr/bin/node
// Script that prints a square
// More info > https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/repeat

const process = require('process'); // se agrega el modulo process usando "require"
const args = process.argv; // se define argv para capturar el valor, para luego ser manipulado
const size = args[2];

if (isNaN(size)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < size; i++) {
    console.log('X'.repeat(size));
  }
}
