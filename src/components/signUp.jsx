import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { addNewUser, checkEmail } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imgProfilo, setImgProfilo] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [accountCreato, setAccountCreato] = useState(false);
  const [name, setName] = useState("");
  const users = useSelector((state) => state.usersData.users);
  const [noMail, setNoMail] = useState(false);
  const [genericError, setGenericError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkEmail(email)) {
      if (users.findIndex((elem) => elem.email === email) === -1) {
        setAccountCreato(true);
        dispatch(addNewUser(email, password, imgProfilo, name));
        setTimeout(() => {
          setAccountCreato(false);
          navigate("/");
        }, 2000);
      } else {
        setNoMail(true);
        setTimeout(() => {
          setNoMail(false);
        }, 2000);
      }
    } else {
      setGenericError(true);
      setTimeout(() => {
        setGenericError(false);
      }, 4000);
    }
  };
  return (
    <>
      <h1 className="text-center mt-5 mb-2">Accedi a FloraMusic</h1>
      <Container className=" mt-5 border border-white p-3 rounded" style={{ color: "white" }}>
        {accountCreato && <Alert variant="success">Account Creato</Alert>}
        {noMail && <Alert variant="danger">Mail già esistente</Alert>}
        {genericError && (
          <Alert variant="warning">
            I dati non soddisfano i parametri richiesti(la mail deve essere una mail esistente)
          </Alert>
        )}

        <Row>
          <Col xs={12}>
            <Form onSubmit={handleSubmit} className="d-flex flex-column">
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  defaultValue={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                  className="inputForm"
                />
              </Form.Group>

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

              <Button className="accedi-button align-self-center" type="submit">
                Crea Account
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default SignUp;
