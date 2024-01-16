import React from 'react'

const ModeButton = (props) => { 
    const { isEditing, changeEditMode, changeNormalMode, deleteRow } = props

    return isEditing ? (
        <td>
            <button onClick={changeNormalMode} className='modeButtons saveButton'> Save </button>
        </td>
    ) : (
        <td>
            <button onClick={deleteRow} className='modeButtons deleteButton'> Delete </button>
            <button onClick={changeEditMode} className='modeButtons editButton'> Edit </button>
        </td>
    )
}

export default ModeButton