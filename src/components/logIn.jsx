import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const LogIn = () => {
  const prevemail = useSelector((state) => state.usersData.currentUser.email);
  const previmg = useSelector((state) => state.usersData.currentUser.imgProfilo);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const users = useSelector((state) => state.usersData.users);

  const checkLogIn = (e) => {
    e.preventDefault();

    for (let i = 0; i < users.length; i++) {
      if (!prevemail ? users[i].email === email : users[i].email === prevemail && users[i].password === password)
        console.log("logIn corretto");
      else console.log("errore");
    }
  };
  return (
    <Container>
      <h1>Accedi a SongStore</h1>

      <div style={{ borderRadius: "100px", overflow: "hidden", width: "200px", height: "200px", margin: "auto" }}>
        <img src={previmg ? previmg : ""} alt="imgProfilo" width="100%" height="100%" style={{ objectFit: "cover" }} />
      </div>

      <hr />
      <form className="form-box" onSubmit={checkLogIn}>
        <p className="inputBox">Indirizzo e-mail</p>
        <input
          type="email"
          class="inputForm"
          defaultValue={prevemail ? prevemail : email}
          required
          placeholder="Inserisci il tuo indirizzo e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="inputBox">Password</p>
        <input
          type="password"
          class="inputForm"
          required
          defaultValue={password}
          placeholder="Inserisci la tua password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="accedi-button">
          Accedi
        </button>
      </form>
      <br />
      <a href="#">Hai dimenticato la password?</a>
      <hr />
      <Link to={"/signUp"}>Non hai un account? Iscrivi a SongStore</Link>
    </Container>
  );
};

export default LogIn;
