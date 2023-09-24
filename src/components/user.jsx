import { useState } from "react";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const User = () => {
  const user = useSelector((state) => state.usersData.currentUser);
  const dispatch = useDispatch();
  const [del, setDel] = useState(false);
  const navigate = useNavigate();
  const users = useSelector((state) => state.usersData.users);

  const [editNameBool, setEditNameBool] = useState(false);
  const [editName, setEditName] = useState(user.userName);

  const [editEmailBool, setEditEmailBool] = useState(false);
  const [editEmail, setEditEmail] = useState(user.email);

  const [editPasswordBool, setEditPasswordBool] = useState(false);
  const [editPassword, setEditPassword] = useState(user.password);

  const [emailAlert, setEmailAlert] = useState(false);

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
      {emailAlert && <Alert variant="warning">Mail già esistente Scegline un'altra</Alert>}
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
                  {editNameBool ? (
                    <input
                      className="mb-3"
                      defaultValue={editName}
                      onChange={(e) => {
                        setEditName(e.target.value);
                      }}
                      onKeyUp={(e) => {
                        if (e.key === "Enter") {
                          dispatch({ type: "EDIT_NAME", payload: { editName: editName, email: user.email } });
                          setEditNameBool(false);
                        }
                      }}
                    />
                  ) : (
                    <>
                      <h4>Nome: {user.userName}</h4>
                      <span style={{ cursor: "pointer" }} onClick={() => setEditNameBool(true)}>
                        <i class="bi bi-pencil-square"></i>
                      </span>
                    </>
                  )}
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  {editEmailBool ? (
                    <input
                      className="mb-3"
                      value={editEmail}
                      onChange={(e) => {
                        setEditEmail(e.target.value);
                      }}
                      onKeyUp={(e) => {
                        if (e.key === "Enter") {
                          if (users.findIndex((elem) => elem.email === editEmail) === -1) {
                            dispatch({ type: "EDIT_EMAIL", payload: { editEmail: editEmail, email: user.email } });
                            setEditEmailBool(false);
                          } else {
                            setEmailAlert(true);
                            setTimeout(() => {
                              setEmailAlert(false);
                              setEditEmail(user.email);
                            }, 2000);
                          }
                        }
                      }}
                    />
                  ) : (
                    <>
                      <h4>Email: {user.email}</h4>
                      <span style={{ cursor: "pointer" }}>
                        <i class="bi bi-pencil-square" onClick={() => setEditEmailBool(true)}></i>
                      </span>
                    </>
                  )}
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  {editPasswordBool ? (
                    <input
                      className="mb-3"
                      defaultValue={editPassword}
                      onChange={(e) => {
                        setEditPassword(e.target.value);
                      }}
                      onKeyUp={(e) => {
                        if (e.key === "Enter") {
                          dispatch({
                            type: "EDIT_PASSWORD",
                            payload: { editPassword: editPassword, email: user.email },
                          });
                          setEditPasswordBool(false);
                        }
                      }}
                    />
                  ) : (
                    <>
                      <h4>Password: ************</h4>
                      <span style={{ cursor: "pointer" }}>
                        <i class="bi bi-pencil-square" onClick={() => setEditPasswordBool(true)}></i>
                      </span>
                    </>
                  )}
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
