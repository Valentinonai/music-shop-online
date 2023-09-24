import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteAccount, logInUserOk } from "../redux/actions";

const LogIn = () => {
  const prevemail = useSelector((state) => state.usersData.currentUser.email);
  const previmg = useSelector((state) => state.usersData.currentUser.imgProfilo);
  const prevname = useSelector((state) => state.usersData.currentUser.userName);
  const [email, setEmail] = useState(prevemail ? prevemail : "");
  const [password, setPassword] = useState("");
  const [log, setLog] = useState(false);
  const [noLog, setNoLog] = useState(false);
  const users = useSelector((state) => state.usersData.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [del, setDel] = useState(false);
  const [noDel, setNoDel] = useState(false);

  const checkLogIn = (e) => {
    e.preventDefault();

    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email && users[i].password === password) {
        setLog(true);
        dispatch(logInUserOk(users[i].email, users[i].password, users[i].imgProfilo, users[i].userName));
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
        setDel(true);
        dispatch(deleteAccount(i));
        setTimeout(() => {
          setDel(false);
          setEmail("");
          setPassword("");
          return;
        }, 2000);
      }
      if (del === true) {
        setNoDel(true);
        setTimeout(() => {
          setNoDel(false);
        }, 2000);
      }
    }
  };

  return (
    <>
      {log && <Alert variant="success">LogIn Effettuato</Alert>}
      {noLog && <Alert variant="danger">Password Errata</Alert>}
      {del && <Alert variant="danger">Account Eliminato</Alert>}
      {noDel && <Alert variant="danger">Account inesistente o password errata</Alert>}

      <h1 className="text-center mt-5">Accedi a FloraMusic</h1>
      <Container className="border border-white p-3 rounded" id="logInTab">
        <Row>
          <div id="imgLogInTab">
            <img
              src={previmg !== "" ? previmg : "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
              alt="imgProfilo"
              width="100%"
              height="100%"
              style={{ objectFit: "cover" }}
            />
          </div>
          <h2 className="text-center">Hi {prevname ? prevname : "..."}</h2>
          <hr />
          <Col xs={12}>
            <Form onSubmit={checkLogIn} className="d-flex flex-column">
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

              <Button className="accedi-button align-self-center" type="submit">
                Log-in
              </Button>
            </Form>
            <hr />
          </Col>
          <Col xs={12} className="text-center">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" onClick={delAccount}>
              Elimina Account
            </a>
            <hr />
            <div className="text-center">
              <Link to={"/signUp"}>Non hai un account? Iscrivi a SongStore</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LogIn;
