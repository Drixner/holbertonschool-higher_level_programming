/*
* Write a JavaScript script that fetches and lists the title for all movies by using this URL: https://swapi-api.hbtn.io/api/films/?format=json

    All movie titles must be list in the HTML tag UL#list_movies
    You can’t use document.querySelector to select the HTML tag
    You must use the JQuery API
*/

const $ = window.$;

$.getJSON('https://swapi-api.hbtn.io/api/films/?format=json', function(data) {
  // obtener la lista de películas
  const movies = data.results;
  // iterar sobre cada película
  movies.forEach(function(movie) {
    // obtener el título de la película
    const title = movie.title;
    // crear un elemento LI para el título
    const li = $('<li>').text(title);
    // agregar el elemento LI al elemento UL#list_movies
    $('#list_movies').append(li);
  });
});
