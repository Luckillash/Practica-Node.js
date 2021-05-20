// USAR SOLO IF CAUSA ERRORES EN LA PRODUCCIÓN

const http = require('http')

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    response.end('Bienvenidos a nuestra pagina principal')
  } else if (request.url === '/about') {
    response.end('Esta es nuestra corta historia')
  } else {
    response.end(
      `<h1>Oops!</h1><p>No podemos encontrar la pagina que estas buscando</p><a href='/'>Devuelta a casa</a>`
    )
  }
})

server.listen(5000)
