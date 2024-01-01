import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom'
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
                <Navbar.Brand href='#home' className='logo'>RAW</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Link to='/' className='nav-link'>Home</Link>
                        <Link to='/shop' className='nav-link'>Shop</Link>
                        <Link to='/archive' className='nav-link'>Archive</Link>
                        <Link to='/account' className="nav-link">Account</Link>
                        <Link to='/cart' className='nav-link'> Cart
                        {/* <div className={styles.navbar__cart}>
                            <h3 className={styles.cart__title}>Cart</h3>
                                <img
                                    className={styles.cart__image}
                                    src="https://image.flaticon.com/icons/svg/102/102276.svg"
                                    alt="shopping cart"
                                />
                            <div className={styles.cart__counter}>{cartCount}</div>
                        </div>   */}
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}