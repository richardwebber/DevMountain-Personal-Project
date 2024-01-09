import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom'
import React from "react";
// import styles from "./Cart.css"


export default function NavbarMain() {
    // const [cartCount, setCartCount] = useState(0)

    // useEffect(() => {
    //     let count = 0
    //     cart.forEach((item) => {
    //         count += item.qty
    //     });

    //     setCartCount(count)
    // }, [cart, Cartcount])

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
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}