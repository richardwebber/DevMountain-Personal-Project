import {  Product, User, Cart } from './db/model.js'

const handlerFunctions = {

    getInventory: async(req, res) => {
        console.log(req.query)
        if (req.query.id ) {
            const singleProduct = await Product.findByPk(req.query.id)
            return res.send(singleProduct)
        }
        const data = await Product.findAll()
        res.send(data)

    },

    addInventory: async(req, res) => {
        await Product.create({})
        const allProducts = await Product.findAll()
        res.send(allProducts)
    },

    deleteInventory: async(req, res) => {
        const { id } = req.params
        
        const filteredData = await Product.findByPk(id)

        await filteredData.destroy()
        const data = await Product.findAll()
        res.send(data)
    },

    editInventory: async(req, res) => {
        const { id } = req.params
        const { name, description, price, url, small, medium, large, xl, sales } = req.body

        // This does the same thing as the code below it. Insted of using .save, we are using .update.
        
        // await Product.update(
        //     { name, description, price, url, s, m, l, xl, sales },
        //     { where: { id } }
        // )

        let editProduct = await Product.findByPk(id)
        editProduct.name = name
        editProduct.description = description
        editProduct.price = price
        editProduct.url = url
        editProduct.s = small
        editProduct.m = medium
        editProduct.l = large
        editProduct.xl = xl
        editProduct.sales = sales
        
        await editProduct.save()


        const inventory = await Product.findAll()
        res.send(inventory)
    },

    getOrder: async(req, res) => {
        console.log(req.query)
        if (req.query.id ) {
            const singleOrder = await Cart.findByPk(req.query.id)
            return res.send(singleOrder)
        }
        const data = await Cart.findAll()
        res.send(data)

    },

    addOrder: async(req, res) => {
        await Cart.create({})
        const allOrders = await Cart.findAll()
        res.send(allOrders)
    },

    editOrder: async(req, res) => {
        const { id } = req.params
        const { status } = req.body

        let editOrder = await Cart.findByPk(id)
        editOrder.status = status
        
        await editOrder.save()


        const inventory = await Cart.findAll()
        res.send(inventory)
    }

}

export default handlerFunctions