import { Container, Row, Col } from 'react-bootstrap'

export default function Shop() {
  return (
    <Container>
      
      <Row>
        <Col xs='9'>9 width</Col>
        <Col xs='3'>3 width</Col>
      </Row>

      <Row>
        <Col>Column</Col>
        <Col xs='6'>6 width</Col>
        <Col>Column</Col>
      </Row>
    </Container>
  )
}