#!/usr/bin/node
/*
Write a script that writes a string to a file.

    The first argument is the file path
    The second argument is the string to write
    The content of the file must be written in utf-8
    If an error occurred during while writing, print the error object
*/

const process = require('process'); //
const args = process.argv;

const filePath = args[2];
const content = args[3];

const fs = require('fs');

fs.writeFile(filePath, content, err => {
  if (err) {
    console.error(err);
  }
});
