import { Button, Col, Container, Form } from 'react-bootstrap';

const Search = () => {
  return (
    <Container>
      <Form.Group controlId="validationCustom01">
        <Col className="d-flex  mt-4  justify-content-center">
          <Form.Control required type="text" placeholder="First name" defaultValue="Enter Song Here..." />
          <Button className="px-3 bg-danger border-0">Enter</Button>
        </Col>
      </Form.Group>
    </Container>
  );
};

export default Search;
