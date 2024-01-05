import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from './ProductCard'
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
// import { Route, Routes, Link, useParams } from 'react-router-dom'
// import IndividualProductPage from './IndividualProductPage.jsx'

const Shop = () => {
  
  console.log('Rendering Shop component')

  
  const [currentData, setCurrentData] = useState([])

    useEffect(() => {
        axios.get('/products')
        .then((res) => {
            console.log(res.data)
            setCurrentData(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const cards = currentData.map((product) => 
    <Col key={product.id} md={3}>
      <ProductCard
        initialProductData={product}
        key={product.id}
      />
    </Col>)

  return (
    <Container>
      <Row>
        {cards}         
      </Row>
    </Container>
  )
}

export default Shop