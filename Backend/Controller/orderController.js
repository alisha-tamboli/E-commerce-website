const Order = require('../models/orderModel')
const mongoose = require('mongoose')

//GET all orders
const getOrders = async(req, res) => {
    const orders = await Order.find({}).sort({createAt: -1})

    res.status(200).json(orders)
}

//GET single order
const getOrder = async(req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such order!"})
    }
    const order = await Order.findById(id)

    if(!order) {
        return req.status(404).json({error: 'No such Order!'})
    }

    res.status(200).json(order)
}

//POST create new order
const createOrder = async(req, res) => {
    const {name, price, desc, category} = req.body

    try{
        const order = await Order.create({name, price, desc, category})
        res.status(200).json(order)
    }
    catch(error) {
        res.status(400).json({error: error.message})
    }
}

//delete an order
const deleteOrder = async(req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such order!"})
    }

    const order = await Order.findOneAndDelete({_id: id})

    if(!order) {
        return req.status(404).json({error: 'No such Order!'})
    }

    res.status(200).json(order)
}

//Update an order 
const updateOrder = async(req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such order!"})
    }

    const order = await Order.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!order) {
        return req.status(404).json({error: 'No such Order!'})
    }

    res.json(200).json(order)
}

module.exports = {
    createOrder,
    getOrders,
    getOrder,
    deleteOrder,
    updateOrder
}