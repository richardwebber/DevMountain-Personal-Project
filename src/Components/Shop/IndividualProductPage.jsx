import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./ProductPage.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-action";

const IndividualProductPage = ({ addToCart, products }) => {
  const [product, setProduct] = useState({});
  const [size, setSize] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`/products?id=${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleSizeChange = (selectedSize) => {
    setSelectedSize(selectedSize);
    setSize(selectedSize);
  };

  const handleAddToCart = () => {
    console.log("Redux State:", products);
    if (size) {
      const existingCartItem = products.find(
        (item) => item.size === size && item.name === product.name
      );
      console.log("This is the existingCartItem: ", existingCartItem);
      if (existingCartItem) {
        const updatedCartItem = {
          ...existingCartItem,
          qty: existingCartItem.qty + 1,
        };
        addToCart(updatedCartItem);
        console.log("Add to cart object:", updatedCartItem);
      } else {
        const productWithSize = {
          ...product,
          size,
          qty: 1,
        };
        addToCart(productWithSize);
      }
      console.log("addToCart button clicked");
    } else {
      alert("Please select a size before adding to cart");
    }
  };

  console.log("Rendering IndividualProductPage for: ", product.name);
  return (
    <Container className="product-card-container">
      <Row>
        <Col lg={6}>
          <Image
            className="col-product-img"
            src={product.url}
            alt={product.name}
          />
        </Col>
        <Col lg={6} className="col-product-info">
          <h2 className="product-name">{product.name}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price}</p>
          <div className="solid-white-line"></div>
          <div className="d-flex justify-content-center size-buttons-div">
            <Button
              variant="secondary"
              onClick={() => handleSizeChange("small")}
              className={selectedSize === "small" ? "selected" : ""}
            >
              SM
            </Button>
            <Button
              variant="secondary"
              onClick={() => handleSizeChange("medium")}
              className={selectedSize === "medium" ? "selected" : ""}
            >
              MD
            </Button>
            <Button
              variant="secondary"
              onClick={() => handleSizeChange("large")}
              className={selectedSize === "large" ? "selected" : ""}
            >
              LG
            </Button>
            <Button
              variant="secondary"
              onClick={() => handleSizeChange("extra-large")}
              className={selectedSize === "extra-large" ? "selected" : ""}
            >
              XL
            </Button>
          </div>
          <Button
            variant="success"
            className="add-to-cart-button"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
          <h3 className="details-style">Details</h3>
          <p className="item-details">
            The (item) is constructed in our 12 oz organic and untreated cotton
            Dearborn Canvas, meaning that the style will soften with wear over
            time, creating a fit that is unique to the wearer. Inspired by a
            classic chore coat silhouette, the garment is cut in a regular fit
            and features a striped blanket lining for warmth. A corduroy collar
            and front patch pockets offer tactile touches, while triple-stitch
            details provide extra durability. The (item) features similar
            construction with an oversized fit.
          </p>
        </Col>
      </Row>
      <div>
        <div className="solid-white-line"></div>
        <h3 className='h3-sizechart-label'>Size Chart</h3>
        <img
          className="mens-size-chart"
          src="https://www.bobber-store.com/img/cms/sizes/carhartt.JPG"
          alt="mens-jacket-size-chart"
        />
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  console.log("Redux State Products:", state.shop.products);
  return {
    products: state.shop.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndividualProductPage);
