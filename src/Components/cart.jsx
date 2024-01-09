import React from 'react'
import { connect } from 'react-redux'
import CartItem from './CartItem.jsx'


const Cart = ({ cart }) => {
  return (
    <div>
      {cart.map(item => {
        <CartItem key={item.id} itemData={item}/>
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    cart: state.shop.cart
  }
}

export default connect(mapStateToProps)(Cart);