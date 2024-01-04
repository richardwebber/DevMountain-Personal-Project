import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const IndividualProductPage = () => {

    let { id } = useParams()

    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`/products?id=${id}`)
        .then((res) => {
            console.log(res.data)
            setProduct(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    console.log('Rendering IndividualProductPage for: ', product.name)
    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
        </div>
    )
}

export default IndividualProductPage