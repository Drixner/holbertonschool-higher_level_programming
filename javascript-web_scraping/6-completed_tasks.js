#!/usr/bin/node
const process = require('process');
const request = require('request');

// Obtiene la URL de la API desde el primer argumento del script
const apiUrl = process.argv[2];

// Realiza una solicitud GET a la API
request.get(apiUrl, (error, response, body) => {
  // Si hay un error al realizar la solicitud, se imprime en consola
  if (error) {
    console.error(error);
    return;
  }

  // Parsea la respuesta de la API en un objeto JSON
  const tasks = JSON.parse(body);

  // Objeto para almacenar las tareas completadas por cada ID de usuario
  const completedTasks = {};

  // Recorre cada tarea de la respuesta de la API
  tasks.forEach((task) => {
    // Si la tarea está marcada como completada
    if (task.completed) {
      // Si el usuario aún no tiene tareas completadas en el objeto, se inicializa en 0
      if (!completedTasks[task.userId]) {
        completedTasks[task.userId] = 0;
      }

      // Se aumenta en 1 la cantidad de tareas completadas para el usuario
      completedTasks[task.userId]++;
    }
  });

  // Se imprimen los usuarios con tareas completadas y su cantidad
  for (const userId in completedTasks) {
    console.log(`${userId}: ${completedTasks[userId]}`);
  }
});
