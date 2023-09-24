import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import AlbumPage from "./components/AlbumPage";

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Routes>
          {/* <Route path="/albumPage/:id" element={<AlbumPage />} /> */}
          <Route path="/" element={<AlbumPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
