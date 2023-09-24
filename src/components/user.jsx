import { useState } from "react";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const User = () => {
  const user = useSelector((state) => state.usersData.currentUser);
  const dispatch = useDispatch();
  const [del, setDel] = useState(false);
  const navigate = useNavigate();

  const delAccount = () => {
    setDel(true);
    dispatch({ type: "DELETE_FROM_USER_PAGE", payload: user.email });
    setTimeout(() => {
      setDel(false);
      navigate("/");
    }, 2000);
  };
  return (
    <>
      {del && <Alert variant="danger">Account Eliminato</Alert>}
      {user.email !== "" && (
        <>
          <h1 className="mt-5 mb-1">Profile Page</h1>
          <Container>
            <Row className=" mt-5 border border-1 border-white rounded p-3 g-5">
              <Col xs={12} md={4} className="mt-3">
                <div>
                  <div
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      width: "150px",
                      height: "150px",
                      borderRadius: "75px",
                    }}
                    className="me-5 mb-5"
                  >
                    <img
                      src={
                        user.imgProfilo !== ""
                          ? user.imgProfilo
                          : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      }
                      alt="imgProfilo"
                      width="100%"
                      className="mb-4"
                    />
                    <span style={{ position: "absolute", bottom: "20px", right: "25px", cursor: "pointer" }}>
                      <i class="bi bi-pencil-square"></i>
                    </span>
                  </div>
                  <Button variant="outline-light" className="d-none d-sm-block" onClick={delAccount}>
                    Elimina Account
                  </Button>
                  <Button variant="outline-light" className="d-block d-sm-none" onClick={delAccount}>
                    <i class="bi bi-trash3"></i>
                  </Button>
                </div>
              </Col>
              <Col xs={12} md={8}>
                <div className="d-flex justify-content-between align-items-center">
                  <h4>Nome: {user.userName}</h4>
                  <span style={{ cursor: "pointer" }}>
                    <i class="bi bi-pencil-square"></i>
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <h4>Email: {user.email}</h4>
                  <span style={{ cursor: "pointer" }}>
                    <i class="bi bi-pencil-square"></i>
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <h4>Password: ************</h4>
                  <span style={{ cursor: "pointer" }}>
                    <i class="bi bi-pencil-square"></i>
                  </span>
                </div>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};
export default User;
