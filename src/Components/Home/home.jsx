import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './home.css'


export default function Home() {
  return (
    <Container fluid className='home-container'>
      <Row className='d-flex align-items-start justify-content-center row-style'>
        <Link to='/shop' className='nav-link link-style'>
          <Col className='text-center img-col'>
          <img className='home-img'src="http://shirtstuckedin.com/wp-content/uploads/2023/08/1_0023_Layer-40-1024x683.jpg" alt="picture of 1992 Nissan Silvia s13" />
          </Col>
        </Link>
      </Row>
    </Container>
  );
}