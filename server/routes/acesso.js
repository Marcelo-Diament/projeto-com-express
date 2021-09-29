const express = require('express'),
  router = express.Router(),
  acessoController = require('../controllers/acesso'),
  authMiddleware = require('../middlewares/auth')

// ROTAS DE CADATRO
router.get('/cadastro', acessoController.register) // Form de cadastro
router.post('/cadastro', acessoController.add) // Execução de cadastro

// ROTAS DE LOGIN
router.get('/login', acessoController.login) // Form de login
router.post('/login', authMiddleware, acessoController.auth) // Execução de login
router.get('/logout', acessoController.logout) // Execução de logout

module.exports = router
