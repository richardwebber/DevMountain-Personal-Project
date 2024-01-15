import React from 'react'

const AddButton = (props) => {
    const {addRow} = props

  return (
    <tr>
        <td colSpan='6'>
            <button onClick={addRow} className='addButton'>Add</button>
        </td>
    </tr>
  )
}

export default AddButton