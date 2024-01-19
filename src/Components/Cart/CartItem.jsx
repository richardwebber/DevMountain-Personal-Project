import React, { useState } from "react";
import { connect } from "react-redux";
import {
  removeFromCart,
  adjustQty,
} from "../../redux/Shopping/shopping-action";
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
import './CartItem.css'


const CartItem = ({ itemData, removeFromCart, adjustQty }) => {
  const [input, setInput] = useState(itemData.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(itemData.id, e.target.value);
  };
  return (
    <Container className='checkout-product-card-container'>
      <Row className='checkout-product-card-row'>
        <Col lg={3}>
      <Image className='checkout-product-card-image' src={itemData.id.url} alt={itemData.id.name} />
        </Col>
        <Col lg={7}>
      <div>
        <p>{itemData.id.name}</p>
        <p>{itemData.id.description}</p>
        <p>${itemData.id.price}</p>
        <p>{itemData.id.size}</p>
      </div>
      </Col>
      <Col lg={2}>
      <div>
        <Row>
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </Row>
        <Row>
        <Button onClick={() => removeFromCart(itemData.id)} className="remove-from-cart-button" variant='danger'>
          <i className="material-icons">delete</i>
        </Button>
        </Row>
      </div>
      </Col>
      </Row>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
