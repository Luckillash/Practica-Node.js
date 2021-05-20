const direccion = require('path')
console.log(direccion.sep)

const direccDoc = direccion.join('/contenido', 'subfolder', 'test.txt')
console.log(direccDoc)

const base = direccion.basename(direccDoc)
console.log(base)

const absoluto = direccion.resolve(
  __dirname,
  'contenido',
  'subfolder',
  'test.txt'
)
console.log(absoluto)
