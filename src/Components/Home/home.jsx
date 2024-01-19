import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './home.css'


export default function Home() {
  return (
    <div className='home-page-div-container'>
      <Container fluid className='home-container home-container-background-img'>
      <Row className='d-flex align-items-start justify-content-center row-style'>
        <Link to='/shop' className='nav-link link-style'>
          <Col className='text-center col-link'>
            SHOP
          </Col>
        </Link>
      </Row>
    </Container>
    </div>
  );
}