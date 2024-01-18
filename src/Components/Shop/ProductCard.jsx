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
    <Card style={{ width: '18rem', margin: 'auto' }} className='text-center'>
      <div>
      <Card.Img variant='top' src={initialProductData.url} style={{ width: '100px', height: '130px'}}/>
      </div>
      <Card.Body>
        <Card.Title>{initialProductData.name}</Card.Title>
        <Card.Text>{initialProductData.description}</Card.Text>
        <Card.Text>${initialProductData.price}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant='primary' onClick={viewProduct}>View Product</Button>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;