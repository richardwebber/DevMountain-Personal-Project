import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './ProductPage.css'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux'
import { addToCart } from '../../redux/Shopping/shopping-action'




const IndividualProductPage = ({ addToCart, products }) => {
    console.log(addToCart)

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
    }, [id])

    const handleAddToCart = () => {
        console.log('Redux State: ', product)

        console.log('Selected Product:', product);
        if (product) {
            addToCart(product)
            console.log('addToCart button clicked')
        }
    }

    console.log('Rendering IndividualProductPage for: ', product.name)
    return (
        <Container>
            <Row>
                <Col>
                    <Image src={product.url} alt={product.name} /> 
                </Col>
                <Col>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <button onClick={handleAddToCart}>Add to Cart</button>
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = state => {
    console.log('Redux State Products:', state.shop.products)
    return {
        products: state.shop.products,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => dispatch(addToCart(product)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndividualProductPage);