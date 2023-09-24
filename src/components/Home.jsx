import { Button, Col, Container, Row } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <Container className="my-3">
        <Row>
          <Col className=" d-flex justify-content-center justify-content-between ">
            <Button className="shadow mt-3 border-0 bg-danger px-4 py-3 fw-bolder rounded-pill">Homepage</Button>
            <Button className="shadow mt-3 border-0 px-4 py-3 bg-info fw-bolder rounded-pill">Latest Songs</Button>
            <Button className="shadow mt-3 border-0 px-4 py-3 bg-warning fw-bolder rounded-pill">Most Searched</Button>
            <Button className="shadow mt-3 border-0 bg-success px-4 py-3 fw-bolder rounded-pill">Our History</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
