#!/usr/bin/node

const request = require('request');

// The movie ID is passed in as the first argument
const movieId = process.argv[2];

// The URL for the API endpoint
const url = `https://swapi-api.hbtn.io/api/films/${movieId}`;

// Send a GET request to the API endpoint
request.get(url, (error, response, body) => {
  if (error) {
    // Handle any errors that occurred
    console.error(error);
  } else {
    // Parse the response body as JSON
    const data = JSON.parse(body);

    // Print the title of the movie
    console.log(data.title);
  }
});
