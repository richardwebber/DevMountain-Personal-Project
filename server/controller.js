import {  Product, User } from './db/model.js'

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
            const singleOrder = await Order.findByPk(req.query.id)
            return res.send(singleOrder)
        }
        const data = await Order.findAll()
        res.send(data)

    },

    addOrder: async(req, res) => {
        await Order.create({})
        const allOrders = await Order.findAll()
        res.send(allOrders)
    },

}

export default handlerFunctions