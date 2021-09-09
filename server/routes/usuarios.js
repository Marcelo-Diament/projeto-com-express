const express = require('express'),
  router = express.Router(),
  usuariosController = require('../controllers/usuarios')

router.get('/', usuariosController.index)

module.exports = router
