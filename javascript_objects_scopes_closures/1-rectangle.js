#!/usr/bin/node
// Aca se usa el constructor para definir las variables "w" y "h". Y despues se inicializan
// las variables que se cran "width" y "height" para cada objeto usando "this" con los valores
// que se pasen como argumento en "w" y "h".
module.exports = class Rectangle {
  constructor (w, h) {
    this.width = w;
    this.height = h;
  }
};
