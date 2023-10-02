const express = require('express')
const {createPostItems, getAllItems, getSingleItem, updateItems, deleteItem} = require ('../controllers/itemController')
const router = express.Router()

router.post('/', createPostItems)
router.get('/', getAllItems)
router.put('/:id',updateItems)
router.delete('/:id', deleteItem)

module.exports= router