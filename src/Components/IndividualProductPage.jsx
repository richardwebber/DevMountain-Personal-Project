import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './ProductPage.css'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';



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
        // <div className="productDiv">

        //     <h2>{product.name}</h2>
        //     <p>{product.description}</p>
        // </div>
        <Container>
            <Row>
                <Col>
                    <Image /> 
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default IndividualProductPage