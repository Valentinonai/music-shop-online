import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./components/logIn";
import "./logIn.css";
import SignUp from "./components/signUp";
import User from "./components/user";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
