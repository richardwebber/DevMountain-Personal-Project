import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom'
import React, { useState, useEffect }from "react";
import {connect} from 'react-redux'
// import styles from "./Cart.css"


function NavbarMain({ cart }) {
    
    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        let count = 0;
        cart.forEach((item) => {
            count += item.qty
        })
        setCartCount(count)
    }, [cart, cartCount])

    return (
        <Navbar expand='md' bg='dark' data-bs-theme='dark'>
            <Container fluid>
                <Navbar.Brand className='logo'><Link to='/' className="logo nav-link">RAW</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Link to='/' className='nav-link'>Home</Link>
                        <Link to='/shop' className='nav-link'>Shop</Link>
                        <Link to='/archive' className='nav-link'>Archive</Link>
                        <Link to='/account' className="nav-link">Account</Link>
                        <Link to='/cart' className='nav-link'> 
                            <i className="material-icons">shopping_cart</i>
                            <p>{cartCount}</p>
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