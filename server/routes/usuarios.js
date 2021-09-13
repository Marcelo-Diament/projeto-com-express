const express = require('express'),
  router = express.Router(),
  usuariosController = require('../controllers/usuarios')

router.get('/:id', usuariosController.show)
router.get('/', usuariosController.index)

module.exports = router
