import axios from 'axios'
import AddButton from './AddButton.jsx'
import TableHeader from './TableHeader.jsx'
import TableRow from './TableRow.jsx'
import './Admin.css'

import { useState, useEffect } from 'react'

const InvoiceDisplay = () => {
    const [currentData, setCurrentData] = useState([])

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
        </div>
    )
}

export default InvoiceDisplay