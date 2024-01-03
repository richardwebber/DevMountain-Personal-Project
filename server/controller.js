import {  Product, User } from './db/model.js'

const handlerFunctions = {

    getInventory: async(req, res) => {
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

        let editJob = await Product.findByPk(id)
        editJob.name = name
        editJob.description = description
        editJob.price = price
        editJob.url = url
        editJob.s = small
        editJob.m = medium
        editJob.l = large
        editJob.xl = xl
        editJob.sales = sales
        
        await editJob.save()


        const inventory = await Product.findAll()
        res.send(inventory)
    }

}

export default handlerFunctions