import { Container, Row, Col } from 'react-bootstrap';


export default function Home() {
  return (
    <Container fluid>
      
      <Row>

        <Col> 1 of 2</Col>
        <Col>2 of 2</Col>

      </Row>

       <Row>

        <Col>1 of 1</Col>
        
      </Row>

    </Container>
  );
}