import React from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const ProductCard = ({ initialProductData }) => {
  return (
    // <div className="product-card">
    //   <h1>{initialProductData.name}</h1>
    //   <p>{initialProductData.description}</p>
    //   <p>{initialProductData.price}</p>
    //   <p>{initialProductData.url}</p>
    //   <p>{initialProductData.s}</p>
    //   <p>{initialProductData.m}</p>
    //   <p>{initialProductData.l}</p>
    //   <p>{initialProductData.xl}</p>
    //   <br />
    // </div>
    <Card style={{ width: '18rem', margin: 'auto' }}>
      <Card.Img variant='top' src='product picture' />
      <Card.Body>
        <Card.Title>{initialProductData.name}</Card.Title>
        <Card.Text>{initialProductData.description}</Card.Text>
        <Button variant='primary'>View Product</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;