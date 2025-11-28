const webpush = require('web-push')
const Informe = require('../models/informe')
const Suscripcion = require('../models/suscripcion')


exports.createInforme = (req, res) => {
  const { titulo, contenido } = req.body
  const informe = new Informe(titulo, contenido)

  informe.save()
    .then(resp => {
      const id = resp.data.name
      informe.id = id

      const payload = {
        notification: {
          title: 'Nuevo informe',
          body: `Se ha añadido un nuevo informe: ${informe.titulo}`
        }
      }

      Suscripcion.getSuscripciones()
        .then((suscripciones) => {
          suscripciones.forEach(suscripcion => {
            webpush.sendNotification(suscripcion, JSON.stringify(payload))
              .then(() => {
                console.log('Notificación enviada')
              })
              .catch(err => {
                console.log('Error al enviar la notificación', err)
              })
          })
        })

      return res.status(201).json({name: informe.id})
    })

}