import React from "react"

const Price = (props) => {
    const { isEditing, value, onValueChange } = props

    return isEditing ? (
        <td>
            <input 
            type = "text"
            value = {value}
            onchange = {(e) => onValueChange(e.target.value)}
            />
        </td>
    ) : (
        <td className="tdStyle">
            {value}
        </td>
    )
}

export default Price