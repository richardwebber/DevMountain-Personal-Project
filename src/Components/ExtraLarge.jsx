import React from "react";

const ExtraLarge = (props) => {
    const { isEditing, value, onValueChange } = props

    return isEditing ? (
        <td>
            <input
            type = "text"
            value = {value}
            onChange = {(e) => onValueChange(e.target.value)}
            />
        </td>
    ) : (
        <td className="tdStyle">
            {value}
        </td>
    )
}

export default ExtraLarge
// test