import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom'
import React, { useState, useEffect }from "react";
import {connect} from 'react-redux'
import './NavbarMain.css'



function NavbarMain({ cart }) {
    
    // const [cartCount, setCartCount] = useState(0)

    // useEffect(() => {
    //     let count = 0;
    //     cart.forEach((item) => {
    //         count += item.qty
    //     })
    //     setCartCount(count)
    // }, [cart, cartCount])
    const cartQuantity = cart.reduce((total, item) => total + item.qty, 0);


    return (
        <Navbar expand='md' bg='dark' data-bs-theme='dark' className='navbar-main' fixed='top'>
            <Container fluid >
                <Navbar.Brand className='logo'><Link to='/' className="logo nav-link">
                    <figure >
                    <img src="../../pictures/logo3.png" alt="" style={{width: '200px'}}/>
                    </figure>
                    </Link></Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Link to='/' className='nav-link'>Home</Link>
                        <Link to='/shop' className='nav-link'>Shop</Link>
                        <Link to='/archive' className='nav-link'>Archive</Link>
                        <Link to='/cart' className='nav-link cart-icon'> 
                            <i className="material-icons">shopping_cart</i>
                            <p className='cart-quantity'>{cartQuantity}</p>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(NavbarMain)