/*
* Write a JavaScript script that updates the text color of the <header> element to red (#FF0000):

    You can’t use document.querySelector to select the HTML tag
    You must use the JQuery API
*/
const $ = window.$;

$(function() {
  $('header').css('color', '#FF0000');
})
