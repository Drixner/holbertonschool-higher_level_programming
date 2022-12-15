#!/usr/bin/node
const process = require('process');
const request = require('request');

// Obtenemos la URL de la que queremos obtener los datos
const url = process.argv[2];

// Realizamos una petición HTTP a la URL especificada
request(url, function (error, response, body) {
  // Si se produjo un error, lo mostramos en la consola y salimos de la función
  if (error) {
    console.error(error);
    return;
  }
  // Si la petición se realizó correctamente (código de estado 200), procesamos los datos
  if (response.statusCode === 200) {
    // Convertimos el cuerpo de la respuesta en un objeto JSON
    const data = JSON.parse(body);
    // Inicializamos un objeto que almacenará la cantidad de tareas completadas por cada usuario
    const userTasks = {};
    // Iteramos sobre cada tarea del objeto JSON
    data.forEach(function (task) {
      // Si la tarea está completada, procesamos su información
      if (task.completed) {
        // Obtenemos el ID del usuario al que pertenece la tarea
        const userId = task.userId;
        // Si ya tenemos un registro para el usuario, incrementamos su cantidad de tareas completadas en 1
        if (userTasks[userId]) {
          userTasks[userId] += 1;
        } else {
          // Si no tenemos un registro para el usuario, lo agregamos y le asignamos una tarea completada
          userTasks[userId] = 1;
        }
      }
    });
    console.log(userTasks);
  }
});

/*
*** Diagrama de flujo ***
+---------------------------+
| Inicializamos variables   |
| url, dict                 |
+---------------------------+
|                           |
| Realizamos petición HTTP  |
+---------------------------->
|                           |
| Si hay error, salimos     |
| de la función             |
+----------------------------+
|                           |
| Si no hay error,          |
| obtenemos los descriptores|
| de propiedad de 'dict'    |
+---------------------------->
|                           |
| Iteramos sobre cada       |
| elemento del cuerpo de la |
| respuesta                 |
+---------------------------->
|                           |
| Desestructuramos el       |
| elemento                  |
+---------------------------->
|                           |
| Si el elemento está       |
| completo, procesamos su   |
| información               |
+---------------------------->
|                           |
| Convertimos el ID del     |
| usuario en cadena de texto|
+---------------------------->
|                           |
| Si la propiedad existe en |
| el objeto 'dict',         |
| incrementamos su valor en |
| 1                         |
+---------------------------->
|                           |
| Si la propiedad no existe |
| en el objeto 'dict', la   |
| agregamos y le asignamos  |
| el valor 1                |
+---------------------------->
|                           |
| Imprimimos el objeto      |
| 'dict' en la consola      |
+----------------------------+
*/
