// MÓDULOS: CÓDIGO ENCAPSULADO
// CADA DOCUMENTE EN node.js ES UN MÓDULO (por default)

const nombres = require('./4-nombre') // O const { john, peter } = require('./4-nombre')
const diHola = require('./5-utiles')
const data = require('./6-saboresAlternativos')

require('./7-granadaMental')

// console.log(data)

// console.log(nombres)

// diHola('susanita')
// diHola(nombres.peter)
// diHola(nombres.john)
