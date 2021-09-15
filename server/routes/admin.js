const express = require('express'),
  router = express.Router(),
  adminController = require('../controllers/admin')

router.get('/usuarios', adminController.index)

module.exports = router