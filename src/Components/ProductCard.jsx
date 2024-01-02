import React from 'react';

const ProductCard = ({ initialProductData }) => {
  return (
    <div className="product-card">
      <h1>{initialProductData.name}</h1>
      <p>{initialProductData.description}</p>
      <p>{initialProductData.price}</p>
      <p>{initialProductData.url}</p>
      <p>{initialProductData.s}</p>
      <p>{initialProductData.m}</p>
      <p>{initialProductData.l}</p>
      <p>{initialProductData.xl}</p>
      <br />
    </div>
  );
};

export default ProductCard;