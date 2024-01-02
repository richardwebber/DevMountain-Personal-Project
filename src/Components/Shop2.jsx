import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from './ProductCard'
import React from 'react'
import axios from 'axios'

import { useState, useEffect } from 'react'

const Shop = () => {
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

    const cards = currentData.map((product) => <ProductCard
    initialProductData={product}
    key={product.id}
    />)

  return (
    <Container>
      <div>
        {cards}
      </div>
    </Container>
  )
}

export default Shop