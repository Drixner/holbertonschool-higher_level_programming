#!/usr/bin/node
const process = require('process');
const request = require('request');

// El primer argumento es la URL a solicitar
const url = process.argv[2];

// El segundo argumento es la ruta del archivo donde se almacenará la respuesta del cuerpo
const filePath = process.argv[3];

// Realizar una solicitud GET a la URL especificada
request.get(url, (error, response, body) => {
  if (error) {
    // Manejar el error si ocurre uno
    console.error(error);
  } else {
    // Escribir la respuesta del cuerpo en la ruta del archivo especificada,
    // usando la codificación de caracteres UTF-8
    require('fs').writeFile(filePath, body, 'utf8', err => {
      if (err) {
        console.error(err);
      } else {
        console.log(`${filePath}`);
      }
    });
  }
});

