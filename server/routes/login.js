const express = require('express'),
  router = express.Router(),
  loginController = require('../controllers/login')

router.post('/', loginController.auth)

module.exports = router