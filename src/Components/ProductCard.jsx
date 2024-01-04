import React from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ initialProductData }) => {
  const navigate = useNavigate()

  const viewProduct = () => {
    console.log('Navigate to:', `/shop/${initialProductData.id}`)
    navigate(`/shop/${initialProductData.id}`)
  }

  console.log('Rendering ProductCard for: ', initialProductData.name)

  return (
    <Card style={{ width: '18rem', margin: 'auto' }}>
      <Card.Img variant='top' src='product picture' />
      <Card.Body>
        <Card.Title>{initialProductData.name}</Card.Title>
        <Card.Text>{initialProductData.description}</Card.Text>
        <Button variant='primary' onClick={viewProduct}>View Product</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;