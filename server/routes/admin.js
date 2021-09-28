const express = require('express'),
  router = express.Router(),
  adminController = require('../controllers/admin'),
  authMiddleware = require('../middlewares/auth')

router.get('/usuarios', authMiddleware, adminController.index)

module.exports = router