//ACCEDER A UN DOCUMENTO

const { readFileSync, writeFileSync } = require('fs')

console.log('iniciar')

const primero = readFileSync('./contenido/primer.txt', 'utf-8')
const segundo = readFileSync('./contenido/segundo.txt', 'utf-8')

// console.log(primero, segundo)

// CREAR UN DOC SI ES QUE NO EXISTE, SE GENERA CUANDO CORRE LA APP, ÚLTIMO PARÁMETRO CREA UN APÉNDICE

writeFileSync(
  './contenido/resultado-sync.txt',
  `Aquí está el resultado: ${primero}, ${segundo}`,
  { flag: 'a' }
)

console.log('tarea finalizada')
console.log('iniciando tarea siguiente')
