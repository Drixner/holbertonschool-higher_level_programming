/*
* Write a JavaScript script that toggles the class of the <header> element when the user clicks on the tag DIV#toggle_header:

    The <header> element must always have one class: red or green, never both in the same time and never empty.
    If the current class is red, when the user click on DIV#toggle_header, the class must be updated to green ; and the reverse.
    You can’t use document.querySelector to select the HTML tag
    You must use the JQuery API
*/
const $ = window.$;
// Espera a que el DOM esté completamente cargado antes de ejecutar cualquier código
$(document).ready(function() {
  // Asigna un controlador de eventos al elemento DIV#toggle_header que se ejecutará cuando se haga clic en él
  $("#toggle_header").click(function() {
    // Verifica si el elemento header actualmente tiene la clase red
    if ($("header").hasClass("red")) {
      // Si tiene la clase red, elimina la clase red y agrega la clase green
      $("header").removeClass("red").addClass("green");
    } else {
      // Si no tiene la clase red, significa que tiene la clase green, por lo que elimina la clase green y agrega la clase red
      $("header").removeClass("green").addClass("red");
    }
  });
});
