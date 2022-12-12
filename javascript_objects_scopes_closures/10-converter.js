#!/usr/bin/node
// Write a function that converts a number from base 10 to another base passed as argument.
// toString() method --> https://javascript.plainenglish.io/number-base-conversion-in-javascript-8bc44219b4ab

exports.converter = function (base) {
  function numReturn (num) {
    return num.toString(base);
  }
  return (numReturn);
};
