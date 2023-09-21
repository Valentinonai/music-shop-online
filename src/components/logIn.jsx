import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteAccount, logInUserOk } from "../redux/actions";

const LogIn = () => {
  const prevemail = useSelector((state) => state.usersData.currentUser.email);
  const previmg = useSelector((state) => state.usersData.currentUser.imgProfilo);
  const [email, setEmail] = useState(prevemail ? prevemail : "");
  const [password, setPassword] = useState("");
  const [log, setLog] = useState(false);
  const [noLog, setNoLog] = useState(false);
  const users = useSelector((state) => state.usersData.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkLogIn = (e) => {
    e.preventDefault();

    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email && users[i].password === password) {
        setLog(true);
        dispatch(logInUserOk(users[i].email, users[i].password, users[i].imgProfilo));
        setTimeout(() => {
          setLog(false);
          navigate("/");
        }, 2000);
        return;
      }
    }
    setNoLog(true);
    setTimeout(() => {
      setNoLog(false);
    }, 2000);
    setPassword("");
  };

  const delAccount = () => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email && users[i].password === password) {
        dispatch(deleteAccount(i));
        setEmail("");
        setPassword("");
      }
    }
  };

  return (
    <Container className="mt-5 border border-white p-3 rounded" style={{ color: "white", width: "50%" }}>
      {log && <Alert variant="success">LogIn Effettuato</Alert>}
      {noLog && <Alert variant="danger">Password Errata</Alert>}

      <h1>Accedi a SongStore</h1>
      <Row>
        <Col xs={12}>
          <div style={{ borderRadius: "100px", overflow: "hidden", width: "200px", height: "200px", margin: "auto" }}>
            <img
              src={previmg !== "" ? previmg : "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
              alt="imgProfilo"
              width="100%"
              height="100%"
              style={{ objectFit: "cover" }}
            />
          </div>
          <hr />
        </Col>
        <Col xs={12}>
          <Form onSubmit={checkLogIn}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="inputForm"
              />
            </Form.Group>

            <Button className="accedi-button" type="submit">
              Submit
            </Button>
          </Form>
          <hr />
        </Col>
        <Col xs={12}>
          <a href="#" onClick={delAccount}>
            Elimina Account
          </a>
          <hr />
          <div>
            <Link to={"/signUp"}>Non hai un account? Iscrivi a SongStore</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LogIn;
