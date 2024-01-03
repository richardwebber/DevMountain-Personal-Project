import React from "react";

const IndividualProductPage = ({ product }) => {
    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
        
        </div>
    )
}

export default IndividualProductPage