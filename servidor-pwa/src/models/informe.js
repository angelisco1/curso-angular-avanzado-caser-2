const axios = require('axios')

class Informe {
  constructor(titulo, contenido, id = null) {
    this.titulo = titulo
    this.contenido = contenido
    this.id = id
  }

  save() {
    return axios.post('https://proyecto-ejemplo-cd33f.firebaseio.com/curso-angular-avanzado-2/angel/informes.json', this)
  }
}

module.exports = Informe