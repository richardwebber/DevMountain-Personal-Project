import { Container, Nav, Navbar, NavDropdown } from "react-dom";
import { Link } from 'react-router-dom'


export default function NavbarMain() {
    return (
        <Navbar expand='md' bg='dark' data-bs-theme='dark'>
            <Container fluid>
                <Navbar.Brand href='#home' className='logo'>RAW.store</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Link to='/' className='nav-link'>Home</Link>
                        <Link to='/shop' className='nav-link'>Shop</Link>
                        <Link to='/archive' className='nav-link'>Archive</Link>
                        <Link to='/account' className="nav-link">Account</Link>
                        <Link to='/cart' className='nav-link'>Cart</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}