/*
* Write a JavaScript script that fetches from https://stefanbohacek.com/hellosalut/?lang=fr and displays the value of hello from that fetch in the HTML tag DIV#hello.

    The translation of “hello” must be displayed in the HTML tag DIV#hello
    You can’t use document.querySelector to select the HTML tag
    You must use the JQuery API
    Your script must work when it is imported from the <head> tag
* */
const $ = window.$;

$.getJSON('https://stefanbohacek.com/hellosalut/?lang=fry', function (data) {
  // obtener la traducción de "hola"
  const hello = data.hello;
  // establecer la traducción en el elemento HTML DIV#hello
  $('#hello').text(hello);
});
