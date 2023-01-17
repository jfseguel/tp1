const router = require('express').Router()

const medicoController = require('../controllers/medico.controller')

router.get('/', medicoController.test)
//router.post('/', usuarioController.create)
//router.get('/:idUsuario', usuarioController.show)

module.exports = router