const router = require('express').Router();
const cart = require('../controllers/cart.controller')

router.route('/:id')
        .get(cart.findCart)

router.route('/update/:id')
        .put(cart.updateCart)

module.exports = router