const express = require('express'),
  router = express.Router(),
  loginController = require('../controllers/login')

router.get('/', loginController.login)
router.post('/', loginController.auth)

module.exports = router