/*
*Write a JavaScript script that fetches the character name from this URL: https://swapi-api.hbtn.io/api/people/5/?format=json

    The name must be displayed in the HTML tag DIV#character
    You can’t use document.querySelector to select the HTML tag
    You must use the JQuery API
*/
const $ = window.$;
$.getJSON('https://swapi-api.hbtn.io/api/people/5/?format=json', function(data) {
  // obtener el nombre del personaje
  const name = data.name;
  // establecer el nombre del personaje en el elemento HTML DIV#character
  $('#character').text(name);
});
