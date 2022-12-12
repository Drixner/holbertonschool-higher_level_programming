#!/usr/bin/node
// Se pone la condicion de que si 'w' o 'h' son menor o igual a 0 se retorne (el return vacio crea
// un objeto vacio) y tmb se agrega la condicion de que si 'h' o 'w' son "undefined" ya que por ejemplo
// en el caso de 'r3' del 2-main.js se pasa solo un valor --> 2 y el otro como no lo pasan es "undefined".

module.exports = class Rectangle {
  constructor (w, h) {
    if (w <= 0 || h <= 0 || w === undefined || h === undefined) {
      return;
    }
    this.width = w;
    this.height = h;
  }
};
