const express = require('express')
const upload = require('../config/upload/image')
const router = express.Router()
const menuController = require('../app/controller/MenuController')

router.get('/create', menuController.create)
router.post('/upload',upload.single('image'), menuController.upload)
router.get('/manage', menuController.manage)
router.get('/upimg/:id/edit', menuController.editimg)
router.get('/:id/edit', menuController.edit)
router.put('/upimg/:id', upload.single('image'), menuController.upimage)
router.put('/:id', menuController.update)
router.delete('/:id', menuController.delete)
router.get('/', menuController.index)

module.exports = router