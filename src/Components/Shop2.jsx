import { Container } from 'react-bootstrap'
import ProductCard from './ProductCard'
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import IndividualProductPage from './IndividualProductPage.jsx'

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
        <Routes>
          {currentData.map((product) => (
            <Route
            key={product.id}
            path={`/${product.id}`}
            element={<IndividualProductPage product={product} />}
            />
          ))}
        </Routes>
      </div>
    </Container>
  )
}

export default Shop