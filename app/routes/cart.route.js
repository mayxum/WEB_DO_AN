const router = require('express').Router();
const cart = require('../controllers/cart.controller')

router.route('/:id')
        .get(cart.findByUID)
        .put(cart.updateCart)

module.exports = router