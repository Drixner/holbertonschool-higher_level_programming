/*
 Write a JavaScript script that adds a <li> element to a list when the user clicks on the tag DIV#add_item:

    The new element must be: <li>Item</li>
    The new element must be added to UL.my_list
    You can’t use document.querySelector to select the HTML tag
    You must use the JQuery API
*/

const $ = window.$;

// Esperar a que el documento esté listo
$(document).ready(function() {
  // Agregar un controlador de eventos de clic para el elemento con ID "add_item"
  $('#add_item').click(function() {
    // Crear un nuevo elemento de lista y agregarlo a la lista con clase "my_list"
    $('<li>Item</li>').appendTo('ul.my_list');
  });
});
