import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./components/logIn";
import "./logIn.css";
import SignUp from "./components/signUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
