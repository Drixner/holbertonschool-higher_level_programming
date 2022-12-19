/*
* Write a JavaScript script that updates the text of the <header> element to New Header!!! when the user clicks on DIV#update_header

    You can’t use document.querySelector to select the HTML tag
    You must use the JQuery API
*/

const $ = window.$;

// Esperar a que el documento esté listo
$(document).ready(function () {
  // Agregar un controlador de eventos de clic para el elemento con ID "update_header"
  $('#update_header').click(function () {
    // Establecer el texto del elemento <header> en "New Header!!!"
    $('header').text('New Header!!!');
  });
});
//  La función $(document).ready() se utiliza para asegurar que el código se ejecute una vez que el documento HTML se haya cargado completamente. Esto es importante porque asegura que todos los elementos de la página estén disponibles para ser manipulados por el código JavaScript.
//  La función $('#update_header').click() agrega un controlador de eventos de clic al elemento con ID "update_header". Cuando el usuario hace clic en este elemento, se ejecuta la función que se le pasa como argumento.
//  La función $('header').text('New Header!!!') establece el texto del elemento <header> en "New Header!!!". La función text() es una función de jQuery que permite obtener o establecer el texto de un elemento en el DOM (Modelo de objetos del documento). En este caso, estamos estableciendo el texto del elemento <header> en "New Header!!!" con text('New Header!!!').
