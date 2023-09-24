import { Card, Col, Container, Row } from 'react-bootstrap';

const CategoryCards = () => {
  return (
    <Container>
      <Row className="d-flex g-2 justify-content-between my-5">
        <Col lg={4} className="w-25 ">
          <Card>
            <Card.Body>
              <Card.Img
                style={{ maxHeight: '350px', objectFit: 'cover', width: '100%' }}
                className="thumbnail h-100"
                src="https://images.unsplash.com/photo-1547355253-ff0740f6e8c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80"
              />
              <Card.Title>Pop</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} className="w-25">
          <Card>
            <Card.Body>
              <Card.Img
                style={{ maxHeight: '350px', objectFit: 'cover', width: '100%' }}
                className="thumbnail"
                src="https://images.unsplash.com/photo-1516450137517-162bfbeb8dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              />
              <Card.Title>Rock</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} className="w-25">
          <Card>
            <Card.Body>
              <Card.Img
                style={{ maxHeight: '350px', objectFit: 'cover', width: '100%' }}
                className="thumbnail"
                src="https://images.unsplash.com/photo-1641935944286-f64230aa1bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80"
              />
              <Card.Title>Hip-Hop</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CategoryCards;
