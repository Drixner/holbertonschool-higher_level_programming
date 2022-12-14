#!/usr/bin/node

const request = require('request');
const API_URL = process.argv[2];
const CHARACTER_ID = 18;

request(API_URL, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    const movies = JSON.parse(body).results;
    let count = 0;
    for (let i = 0; i < movies.length; i++) {
      const movie = movies[i];
      for (let j = 0; j < movie.characters.length; j++) {
        const character = movie.characters[j];
        if (character.includes(CHARACTER_ID)) {
          count++;
        }
      }
    }
    console.log(`${count}`);
  } else {
    console.log('An error occurred while trying to access the API.');
  }
});
