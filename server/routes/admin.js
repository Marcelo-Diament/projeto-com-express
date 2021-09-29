const express = require('express'),
  router = express.Router(),
  usersController = require('../controllers/users'),
  adminMiddleware = require('../middlewares/admin')

// ROTAS ADMINISTRATIVAS (REQUEREM QUE O USUÁRIO AUTENTICADO SEJA ADMIN)
router.get('/usuarios', adminMiddleware, usersController.list) // Tabela de usuários

module.exports = router
