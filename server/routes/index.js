const express = require('express'),
  router = express.Router(),
  indexController = require('../controllers/index')

router.get('/', indexController.index)

module.exports = router
