#!/usr/bin/node

const process = require('process');
const request = require('request');
const url = process.argv[2]; // obtenemos la URL de la API desde el primer argumento del script

request(url, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const data = JSON.parse(body);

    // Creamos un objeto para almacenar la cantidad de tareas completadas por cada ID de usuario
    const completedTasksByUser = {};

    // Iteramos sobre cada tarea
    data.forEach(task => {
      // Si la tarea está completada, aumentamos el contador de tareas completadas para el ID de usuario correspondiente
      if (task.completed) {
        if (completedTasksByUser[task.userId]) {
          completedTasksByUser[task.userId]++;
        } else {
          completedTasksByUser[task.userId] = 1;
        }
      }
    });

    // Imprimimos el resultado en formato JSON
    console.log(JSON.stringify(completedTasksByUser, null, 2));
  }
});
