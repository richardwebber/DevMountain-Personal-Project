import React from "react";

const CartItem = ({ itemData }) => {
    return (
        <div>
            <img 
            src={itemData.url} 
            alt={itemData.name} 
            />
            <div>
                <p>{itemData.title}</p>
                <p>{itemData.description}</p>
                <p>{itemData.price}</p>
            </div>
            <div>
                <div>
                    <label htmlFor="qty"></label>
                    <input min='1' type="number" id='qty' name='qty' value={itemData.qty}/>
                </div>
                <button>
                    <img src="" alt="" />
                </button>
            </div>
        </div>
    )
}

export default CartItem