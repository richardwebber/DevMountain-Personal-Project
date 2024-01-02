import React from "react";

const Url = (props) => {
    const { isEditing, value, onValueChange } = props

    return isEditing ? (
        <td>
            <input
            type = "Text"
            value  = {value} 
            onChange = {(e) => onValueChange(e.target.value)}
            /> 
        </td>
    ) : (
        <td className="tdStyle">
            {value}
        </td>
    )
}

export default Url