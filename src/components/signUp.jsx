import { useState } from "react";
import { Container } from "react-bootstrap";
import { addNewUser } from "../redux/actions";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewUser(email, password));
  };
  return (
    <Container>
      <h1>SignUp SongStore</h1>
      <hr />
      <form className="form-box" onSubmit={handleSubmit}>
        <p className="inputBox">Indirizzo e-mail</p>
        <input
          type="email"
          id="email"
          defaultValue={email}
          required
          placeholder="Inserisci il tuo indirizzo e-mail"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <p className="inputBox">Password</p>
        <input
          type="password"
          id="password"
          defaultValue={password}
          required
          placeholder="Inserisci la tua password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button type="submit" className="accedi-button">
          Accedi
        </button>
      </form>
    </Container>
  );
};

export default SignUp;
