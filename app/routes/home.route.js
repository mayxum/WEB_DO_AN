const router = require('express').Router()
const home = require('../controllers/home.controller')

router.route('/home')
    .get(home.login)


module.exports = router