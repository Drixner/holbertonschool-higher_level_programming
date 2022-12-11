#!/usr/bin/node
// Script that prints the first argument passed to it.

// usamos 'process.argv' para poder extraer el argumento que se le pasa,
// en la primera linea menciona que si no hay argumento dado en index 2
// se imprime no argumento, de lo contrario, se imprime el propio argumento

if (!process.argv[2]) {
  console.log('No argument');
} else {
  console.log(process.argv[2]);
}
