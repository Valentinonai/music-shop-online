import { useState } from "react";
import { Container } from "react-bootstrap";
import { addNewUser } from "../redux/actions";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imgProfilo, setImgProfilo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewUser(email, password, imgProfilo));
  };
  return (
    <Container>
      <h1>SignUp SongStore</h1>
      <hr />
      <form className="form-box" onSubmit={handleSubmit}>
        <p className="inputBox">Indirizzo e-mail</p>
        <input
          type="email"
          class="inputForm"
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
          class="inputForm"
          defaultValue={password}
          required
          placeholder="Inserisci la tua password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <p className="inputBox">Immagine Profilo URL</p>
        <input
          type="text"
          class="inputForm"
          defaultValue={imgProfilo}
          placeholder="Inserisci URL immagine profilo"
          onChange={(e) => {
            setImgProfilo(e.target.value);
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
