const express = require('express')
const {createOrder, getOrders, getOrder, deleteOrder, updateOrder} = require('../Controller/orderController')

const router = express.Router()

//GET all orders
router.get('/', getOrders)

//GET single order
router.get('/:id', getOrder)

//POST create new order
router.post('/', createOrder)

//delete an order
router.delete('/:id', deleteOrder)

//Update an order
router.patch('/:id', updateOrder)

module.exports = router