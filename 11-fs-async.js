const { readFile, writeFile } = require('fs')

console.log('iniciar')

readFile('./contenido/primer.txt', 'utf8', (error, resultado) => {
  if (error) {
    console.log(error)
    return
  }
  const primero = resultado
  readFile('./contenido/segundo.txt', 'utf-8', (error, resultado) => {
    if (error) {
      console.log(error)
      return
    }
    const segundo = resultado
    writeFile(
      './contenido/resultado-async.txt',
      `Aquí está el resultado: ${primero}, ${segundo}`,
      (error, resultado) => {
        if (error) {
          console.log(error)
          return
        }
        console.log('tarea finalizada')
      }
    )
  })
})
console.log('iniciando siguiente tarea ')
