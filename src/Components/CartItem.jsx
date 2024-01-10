import React from "react";

const CartItem = ({ itemData }) => {
    console.log(itemData)
    return (
        <div>
            <p>{itemData.id.name}</p>
            <h1>hello</h1>
        </div>
    )
}

export default CartItem