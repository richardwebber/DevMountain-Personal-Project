import express from 'express'
import morgan from 'morgan'
import ViteExpress from 'vite-express'


const app = express()

app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))

import handlerFunctions from './controller.js'
const { getInventory, addInventory, deleteInventory, editInventory } = handlerFunctions

app.get('/products', getInventory)
app.post('/product', addInventory)
app.delete('/product/:id', deleteInventory)
app.put('/product/:id', editInventory)

ViteExpress.listen(app, 7777, () => console.log(`Server is listening on http://localhost:7777`))