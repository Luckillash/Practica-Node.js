const os = require('os')

// INFO ABOUT USER

const user = os.userInfo()
console.log(user)

// MÉTODO RETORNA EL TIEMPO EN LÍNEA DEL SISTEMA EN SEGUNDOS

console.log(`El tiempo en línea del sistema es ${os.uptime} segundos`)

const actualOS = {
  nombre: os.type(),
  lanzamiento: os.release(),
  memoriaTot: os.totalmem(),
  memoriaLib: os.freemem(),
}

console.log(actualOS)
