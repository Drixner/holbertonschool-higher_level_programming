#!/usr/bin/node
// import module request
const request = require('request');

// Get URL from command line argument
const url = process.argv[2];

// Send GET request to URL
request(url, (error, response, body) => {
  // Check if there was an error
  if (error) {
    // Print error message
    console.error('There was an error while making the request:', error);
  } else {
    // Check if response is not null
    if (response) {
      // Print status code
      console.log(`code: ${response.statusCode}`);
    } else {
      // Print error message
      console.error('No response received from the server');
    }
  }
});
