import Name from './Name.jsx';
import Price from './Price.jsx';
import Url from './Url.jsx';
import Small from './Small.jsx';
import Medium from './Medium.jsx';
import Large from './Large.jsx';
import ExtraLarge from './ExtraLarge.jsx';
import ModeButton from './ModeButton.jsx';
import Description from './Description.jsx';
import { useState } from 'react';
import axios from 'axios';
import './Admin.css'

const TableRow = (props) => {
    
    const {initialInvoiceData, initialEditMode, deleteRow, currentData, setCurrentData } = props
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
            <ModeButton
            isEditing={editMode}
            changeEditMode={changeEditMode}
            changeNormalMode={changeNormalMode}
            deleteRow={deleteRow}
            />  
            </td>
            
            <td>
            <Name
            isEditing={editMode}
            value={name}
            onValueChange={setName}
            /> 
            </td>

            <td>
            <Description
            isEditing={editMode}
            value={description}
            onValueChange={setDescription}
            />
            </td>

            <td>
            <Price
            isEditing={editMode}
            value={price}
            onValueChange={setPrice}
            />
            </td>

            <td>
            <Url
            isEditing={editMode}
            value={url}
            onValueChange={setUrl}
            />
            </td>

            <td>
            <Small
            isEditing={editMode}
            value={small}
            onValueChange={setSmall}
            />
            </td>

            <td>
            <Medium
            isEditing={editMode}
            value={medium}
            onValueChange={setMedium}
            />
            </td>

            <td>
            <Large
            isEditing={editMode}
            value={large}
            onValueChange={setLarge}
            />
            </td>

            <td>
            <ExtraLarge
            isEditing={editMode}
            value={xl}
            onValueChange={setXl}
            />
            </td>

        </tr>
    )
}

export default TableRow;