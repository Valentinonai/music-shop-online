import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { addNewUser } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imgProfilo, setImgProfilo] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [accountCreato, setAccountCreato] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAccountCreato(true);
    dispatch(addNewUser(email, password, imgProfilo));
    setTimeout(() => {
      setAccountCreato(false);
      navigate("/");
    }, 2000);
  };
  return (
    <Container className=" mt-5 border border-white p-3 rounded" style={{ color: "white" }}>
      {accountCreato && <Alert variant="success">Account Creato</Alert>}
      <h1>Accedi a SongStore</h1>
      <Row>
        <Col xs={12}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                defaultValue={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="inputForm"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                defaultValue={password}
                onChange={(e) => setPassword(e.target.value)}
                className="inputForm"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicImg">
              <Form.Label>Immagine Profilo</Form.Label>
              <Form.Control
                type="text"
                placeholder="URL"
                defaultValue=""
                onChange={(e) => setImgProfilo(e.target.value)}
                className="inputForm"
              />
            </Form.Group>

            <Button className="accedi-button" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default SignUp;
