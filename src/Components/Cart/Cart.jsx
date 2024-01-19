import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem.jsx";
import { useNavigate } from "react-router-dom";


const Cart = ({ cart }) => {
  const [uniqueCartItems, setUniqueCartItem] = useState([])
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const uniqueItemsMap = new Map()

    cart.forEach((item) => {
      console.log(item)
      const key = `${item.id.size}-${item.id.name}`
      if (!uniqueItemsMap.has(key)) {
        uniqueItemsMap.set(key, {...item, prevQty: 0 })
      } else {
        const existingItem = uniqueItemsMap.get(key)
        existingItem.qty += item.qty
        setUniqueCartItem(Array.from(uniqueItemsMap.values()))
      }
    })

    const uniqueItemsArray = Array.from(uniqueItemsMap.values())
    setUniqueCartItem(uniqueItemsArray)

    let items = 0
    let price = 0

    uniqueItemsArray.forEach((item) => {
      items += item.qty
      price += (item.qty - item.prevQty) * item.id.price
      item.prevQty = item.qty
    })

    setTotalPrice(price)
    setTotalItems(items)
  }, [ cart ]);

  const navigate = useNavigate();

  const viewCheckout = () => {
    console.log("Navigate to:", `/checkout`);
    navigate(`/checkout`);
  };

  const quantityText = totalItems === 1 ? "item" : "items";
  return (
    <div>
      <div>
        {uniqueCartItems.map((item) => (
          <CartItem key={item.id.id + item.id.size} itemData={item}/>
        ))}
      </div>
      <div>
        <h4>Cart Summary</h4>
        <div>
          <span>
            TOTAL: ({totalItems} {quantityText})
          </span>
          <span>$ {totalPrice}</span>
        </div>
        <button variant="primary" onClick={viewCheckout}>
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
