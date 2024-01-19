import axios from 'axios'
import AddButton from './AddButton.jsx'
import TableHeader from './ProductTableComponents/TableHeader.jsx'
import TableRow from './ProductTableComponents/TableRow.jsx'
import OrdersTable from './OrderTableComponents/OrdersTable.jsx'
import OrderHeader from './OrderTableComponents/OrderHeader.jsx'
import './Admin.css'

import { useState, useEffect } from 'react'

const ProductTableDisplay = () => {
    const [currentData, setCurrentData] = useState([])
    const [currentOrder, setCurrentOrder] = useState([])

    useEffect(() => {
        axios.get('/products')
        .then((res) => {
            console.log(res.data)
            setCurrentData(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    useEffect(() => {
        axios.get('/orders')
        .then((res) => {
            console.log(res.data)
            setCurrentOrder(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const addRow = () => {
        axios.post('/product')
        .then((res) => {
            setCurrentData(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const deleteRow = (id) => {
        axios.delete(`/product/${id}`)
        .then((res) => {
            console.log(res.data) 
            setCurrentData(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const rows = currentData.map((product) => <TableRow 
    initialInvoiceData={product}
    initialEditMode={false}
    key={product.id}
    deleteRow={() => deleteRow(product.id)}
    currentData={currentData}
    setCurrentData={setCurrentData}
    />)

    const ordersRow = currentOrder.map((order) => <OrdersTable
    initialOrderData={order}
    key={order.orderId}
    currentOrder={currentOrder}
    setCurrentOrder={setCurrentOrder}
     />)

    return (
        <div>
            <table>
                <thead>
                    <TableHeader />
                </thead>

                <tbody>
                    {rows}
                </tbody>

                <tfoot>
                    <AddButton addRow={addRow} />
                </tfoot>
            </table>
            <div className='productTable-div-orderTable'></div>
            <div className='ordersTable-div'>
            <table>
                <thead>
                    <OrderHeader className='orderHeader-display'/>
                </thead>
                <tbody>
                    {ordersRow}
                </tbody>
                <tfoot>

                </tfoot>
            </table>
            </div>
        </div>
    )
}

export default ProductTableDisplay