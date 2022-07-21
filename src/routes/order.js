const express = require('express')
const router = express.Router()
const orderController = require('../app/controller/OrderController')

router.post('/upload', orderController.upload)
router.get('/manage/:id', orderController.detail)
router.get('/manage', orderController.manage)
router.get('/:id',orderController.orderId)
router.get('/', orderController.index)

module.exports = router