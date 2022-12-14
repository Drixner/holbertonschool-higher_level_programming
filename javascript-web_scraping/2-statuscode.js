#!/usr/bin/node
// add module request
const request = require('request');

// Get URL from command line argument
const url = process.argv[2];

// Send GET request to URL
request(url, (error, response, body) => {
  // Print status code
  console.log(`code: ${response.statusCode}`);
});
