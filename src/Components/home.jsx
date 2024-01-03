import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <Container fluid>
      
      <Row style={{ height: '500px'}}>

  
        <Link to='/shop' className='nav-link'>
          <Col>Shop</Col>
        </Link>
  

      </Row>

       <Row>

        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
        
      </Row>

    </Container>
  );
}