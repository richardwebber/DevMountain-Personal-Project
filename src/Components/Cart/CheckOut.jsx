import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { connect } from "react-redux";
import { useState } from "react";

const CheckOut = ({ cart, addToDatabase }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleAllCheckOuts = () => {
    const allCheckOutData = {
      firstName,
      lastName,
      email,
      userCart: cart.map((item) => {
        return {
          itemId: item.id.id,
          itemName: item.id.name,
          itemPrice: item.id.price,
          itemQty: item.qty,
        };
      }),
    };
    console.log(allCheckOutData);
  };

  return (
    <Form style={{ "max-width": "900px", margin: "auto" }}>
      <Form.Group className="mb-3" controlId="formGroupName">
        <h1>Checkout</h1>
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
      <button type="button" onClick={handleAllCheckOuts}>
        Checkout
      </button>
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
