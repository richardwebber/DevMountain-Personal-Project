import Name from './Name.jsx';

import ModeButton from './ModeButton.jsx';
import { useState } from 'react';
import axios from 'axios';
import './Component.css'

const DivRow = (props) => {
    
    const {initialInvoiceData, initialEditMode, deleteRow, currentData, setCurrentData, currentImage} = props
    const [editMode, setIsEditing] = useState(initialEditMode)
    const [name, setName] = useState(initialInvoiceData.name)
    const [description, setDescription] = useState(initialInvoiceData.description)
    const [price, setPrice] = useState(initialInvoiceData.price)
    const [url, setUrl] = useState(initialInvoiceData.url)
    const [small, setSmall] = useState(initialInvoiceData.s)
    const [medium, setMedium] = useState(initialInvoiceData.m)
    const [large, setLarge] = useState(initialInvoiceData.l)
    const [xl, setXl] = useState(initialInvoiceData.xl)

    const changeEditMode = () => setIsEditing(true)
    const changeNormalMode = () => {

        const bodyObj = {
            name,
            description,
            price, 
            url,
            small,
            medium, 
            large,
            xl
        }
        
        axios.put(`./product/${initialInvoiceData.id}`, bodyObj)
        .then((res) => {
            console.log(res.data)
            setCurrentData(res.data)
            setIsEditing(false)
        })
        .catch((thesehands) => {
            console.log(thesehands)
        })
    }

    return (
        <tr className="row">
            <td>
            <img className="userImg" src={currentImage} alt={testImg} />  
            {/* <div dangerouslySetInnerHTML={{ __html: currentImage }} /> */}
            </td>

            <ModeButton
            isEditing={editMode}
            changeEditMode={changeEditMode}
            changeNormalMode={changeNormalMode}
            deleteRow={deleteRow}
            />
            
            <Name
            isEditing={editMode}
            value={name}
            onValueChange={setName}
            />

            <Price
            isEditing={editMode}
            value={phone}
            onValueChange={setPhone}
            />

            <Url
            isEditing={editMode}
            value={email}
            onValueChange={setEmail}
            />

            <Small
            isEditing={editMode}
            value={plan}
            onValueChange={setPlan}
            />

            <Medium
            isEditing={editMode}
            value={plan}
            onValueChange={setPlan}
            />

            <Large
            isEditing={editMode}
            value={plan}
            onValueChange={setPlan}
            />

            <ExtraLarge
            isEditing={editMode}
            value={plan}
            onValueChange={setPlan}
            />

        </tr>
    )
}

export default DivRow;