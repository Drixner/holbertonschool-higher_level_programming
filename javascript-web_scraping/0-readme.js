#!/usr/bin/node
/*
Write a script that reads and prints the content of a file.

    The first argument is the file path
    The content of the file must be read in utf-8
    If an error occurred during the reading, print the error object
*/
// process.argv 
const process = require('process'); // add module
const args = process.argv;
const filePath = args[2]

const fs = require('fs'); //load fs class

fs.readFile(filePath, 'utf8', function(err, content){
  if(err){
    return console.log(err);
  }
  // imprimo el contenido que leimos del archivo.
  console.log(content);
})
