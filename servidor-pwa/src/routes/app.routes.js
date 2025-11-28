const express = require('express')
const InformesController = require('../controllers/informes.controller')

const router = express.Router()

router.post('/informes', InformesController.createInforme)

module.exports = router