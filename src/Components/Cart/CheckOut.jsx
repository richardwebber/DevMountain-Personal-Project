import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { connect } from "react-redux";
import { useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button'
import './checkOut.css'

const CheckOut = ({ cart, addToDatabase }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const clearFormState = () => {
      setFirstName('')
      setLastName('')
      setEmail('')
  }

  const handleAllCheckOuts = async () => {
    const allCheckOutData = {
      firstName,
      lastName,
      email,
      userCart: cart.map((item) => {
        return {
          itemName: item.id.name,
          itemQty: item.qty,
        };
      }),
    };
    // console.log(allCheckOutData);
    let ordersArr = await allCheckOutData.userCart.map((product) => ({
      firstName: allCheckOutData.firstName,
      lastName: allCheckOutData.lastName,
      order: product.itemName,
      email: allCheckOutData.email,
      itemName: product.itemName,
      itemQty: product.itemQty
    }))

    console.log(ordersArr)

    try {
      await Promise.all(ordersArr.map(order => axios.post('/order', order)))
      // addToDatabase(allCheckOutData)
    } catch (error) {
      console.error('Error submitting order:', error)
    }
    alert('Thank you for submitting your order!')
    clearFormState()
  };

  return (
    <Form className='checkout-form' style={{ "maxWidth": "900px", margin: "auto" }}>
      <Form.Group className="mb-3" controlId="formGroupName">
        <h1 className='checkout-h1-label'>Checkout</h1>
        <Row>
          <Col style={{ border: "none" }}>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Col>
          <Col style={{ border: "none" }}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Col>
        </Row>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Row>
          <Col style={{ border: "none" }}>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Col>
        </Row>
      </Form.Group>
      <div className='checkout-page-button-div'>
      <Button type="button" className='checkout-page-button' onClick={handleAllCheckOuts}>
        Checkout
      </Button>
      </div>
    </Form>
  );
};

const mapStateToProps = (state) => ({
  cart: state.shop.cart,
});

const mapDispatchToProps = (dispatch) => ({
  addToDatabase: (data) => dispatch(addToDatabase(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
