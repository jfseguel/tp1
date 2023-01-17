const router = require('express').Router()

const usuarioController = require('../controllers/usuario.controller')

router.get('/', usuarioController.test)
//router.post('/', usuarioController.create)
//router.get('/:idUsuario', usuarioController.show)

module.exports = router