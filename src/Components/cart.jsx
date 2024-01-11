import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import CartItem from './CartItem.jsx'
import { useNavigate } from 'react-router-dom';


const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalItems, setTotalItems] = useState(0)

  useEffect(() => {
    let items = 0
    let price = 0

    cart.forEach(item => {
      items += item.qty;
      price += item.qty * item.id.price
    })

    setTotalPrice(price)
    setTotalItems(items)
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems])

  const navigate = useNavigate()

  const viewProduct = () => {
    console.log('Navigate to:', `/checkout`)
    navigate(`/checkout`)
  }


  const quantityText = totalItems === 1 ? 'item' : 'items'
  return (
    <div>
      <div>
      {cart.map(item => (
        <CartItem key={item.id} itemData={item}/>
      ))}
      </div>
      <div>
        <h4>Cart Summary</h4>
        <div>
          <span>TOTAL: ({totalItems} {quantityText})</span>
          <span>$ {totalPrice}</span>
        </div>
        <button variant='primary' onClick={viewProduct}>Proceed To Checkout</button>
      </div>
    </div>
  )
} 

const mapStateToProps = state => {
  return {
    cart: state.shop.cart
  }
}

export default connect(mapStateToProps)(Cart);