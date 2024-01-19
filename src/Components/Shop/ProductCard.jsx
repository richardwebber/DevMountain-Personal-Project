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
    <Card className='text-center productCard-style'>
      <div>
      <Card.Img variant='top' src={initialProductData.url} className='productCard-img'/>
      </div>
      <Card.Body className='card-body-style'>
        <Card.Title>{initialProductData.name}</Card.Title>
        <Card.Text className='card-text-description'>{initialProductData.description}</Card.Text>
        <Card.Text className='card-text-price'>${initialProductData.price}</Card.Text>
      </Card.Body>
      <Card.Footer className='card-footer-style'>
        <Button className='view-product-button' variant='secondary' onClick={viewProduct}>View Product</Button>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;