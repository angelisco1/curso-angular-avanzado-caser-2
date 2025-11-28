const axios = require('axios')

class Suscripcion {
  static getSuscripciones() {
    return axios.get('https://proyecto-ejemplo-cd33f.firebaseio.com/curso-angular-avanzado-2/angel/notificaciones.json')
      .then((resp) => {
        console.log(resp.data)
        return Object.values(resp.data)
      })
  }
}

module.exports = Suscripcion