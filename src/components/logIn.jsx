import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logInUserOk } from "../redux/actions";

const LogIn = () => {
  const prevemail = useSelector((state) => state.usersData.currentUser.email);
  const previmg = useSelector((state) => state.usersData.currentUser.imgProfilo);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const users = useSelector((state) => state.usersData.users);
  const dispatch = useDispatch();

  const checkLogIn = (e) => {
    e.preventDefault();

    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email ? email : prevemail && users[i].password === password) {
        dispatch(logInUserOk(users[i].email, users[i].password, users[i].imgProfilo));
        console.log("ciao");
      } else console.log("errore");
    }
  };
  return (
    <Container className="mt-5 border border-white p-3 rounded" style={{ color: "white", width: "50%" }}>
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
                defaultValue={prevemail ? prevemail : email}
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

            <Button className="accedi-button" type="submit">
              Submit
            </Button>
          </Form>
          <hr />
        </Col>
        <Col xs={12}>
          <a href="#">Elimina Account</a>
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
