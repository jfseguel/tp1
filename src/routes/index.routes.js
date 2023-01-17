const { Router } = require('express')

const usuarioRoutes = require('./usuarios.routes')
const medicoRoutes = require('./medicos.routes')

const initRoutes = () => {
    const router = Router()

    // lista de rutas
    router.use('/usuarios', usuarioRoutes)
    router.use('/medicos', medicoRoutes)

    return router
}

module.exports = { initRoutes }