import React, { useState } from 'react';
import axios from 'axios';
import OrderEditSaveButton from './OrderEditSaveButton.jsx';

const OrdersTable = (props) => {
    const {initialOrderData, currentOrder, setCurrentOrder} = props

    const createdAtDate = new Date(initialOrderData.createAt)

    let formattedDate = createdAtDate.toLocaleDateString('en-US', {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric',
      });

    let formattedTime = createdAtDate.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    })
    

    return (
        <tr>
           <td>
            <OrderEditSaveButton
            
            />
           </td>
            <td className='tdStyle'>
                {initialOrderData.firstName}
            </td>
            <td className='tdStyle'>
                {initialOrderData.lastName}
            </td>
            <td className='tdStyle'>
                {initialOrderData.email}
            </td>
            <td className='tdStyle'>
                {initialOrderData.order}
            </td>
            <td className='tdStyle'>
                {initialOrderData.itemQty}
            </td>
            <td className='tdStyle'>
                {initialOrderData.status}
            </td>
            <td className='tdStyle'>
                {formattedDate}
            </td>
            <td className='tdStyle'>
                {formattedTime}
            </td>
        </tr>
    )
}

export default OrdersTable