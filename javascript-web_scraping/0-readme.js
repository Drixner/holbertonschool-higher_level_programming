#!/usr/bin/node
/*
Write a script that reads and prints the content of a file.

    The first argument is the file path
    The content of the file must be read in utf-8
    If an error occurred during the reading, print the error object
*/

const fs = require('fs'); // Import the fs module

// Get file path from command line argument
const filePath = process.argv[2];

// Read the file at the given path in utf-8
fs.readFile(filePath, 'utf8', (error, data) => {
  // Check if there was an error
  if (error) {
    // Print the error object
    console.error(error);
  } else {
    // Print the file contents
    console.log(data);
  }
});
