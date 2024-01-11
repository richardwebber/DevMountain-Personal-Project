import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <Container fluid>
      
      <Row style={{ height: '500px'}}>

  
        <Link to='/shop' className='nav-link'>
          <Col>
          <img src="http://shirtstuckedin.com/wp-content/uploads/2023/08/1_0023_Layer-40-1024x683.jpg" alt="picture of 1992 Nissan Silvia s13" />
          </Col>
        </Link>
  

      </Row>

       <Row>

        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
        
      </Row>

    </Container>
  );
}