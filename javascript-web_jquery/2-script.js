/*
Write a JavaScript script that updates the text color of the <header> element to red (#FF0000) when the user clicks on the tag DIV#red_header:

    You can’t use document.querySelector to select the HTML tag
    You must use the JQuery API
*/
const $ = window.$;

$(document).ready(function() { // esta funcion se ejecuta cuando el documento html ha terminado de cargarse.
  $('#red_header').click(function() { // se agrega un controlador de evento click al ID red_header
    $('header').css('color', '#FF0000');
  })
})
