function saludar(nombre) {
  return `Hola, ${nombre}! v1.0.1`;
}

function adios(){
  console.log("Adios")
}

module.exports = { saludar, adios };