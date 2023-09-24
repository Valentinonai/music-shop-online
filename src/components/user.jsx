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

  const [editImgBool, setEditImgBool] = useState(false);
  const [editImg, setEditImg] = useState(user.imgProfilo);

  const [emailAlert, setEmailAlert] = useState(false);
  const [emailAlert2, setEmailAlert2] = useState(false);

  const [genericAlert, setGenericAlert] = useState(false);

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
      {emailAlert2 && <Alert variant="warning">Non hai inserito un'email valida</Alert>}
      {genericAlert && <Alert variant="warning">Non hai inserito un valore valido</Alert>}
      {user.email !== "" && (
        <>
          <h1 className="mt-5 mb-1">Profile Page</h1>
          <Container>
            <Row className=" mt-5 border border-1 border-white rounded p-3 g-5">
              {editImgBool && (
                <div className="d-flex w-100 align-items-center mt-0">
                  <input
                    className=" inputForm"
                    defaultValue={editImg}
                    onChange={(e) => {
                      setEditImg(e.target.value);
                    }}
                  />
                  <Button
                    variant="outline-light"
                    className=""
                    onClick={() => {
                      dispatch({ type: "EDIT_IMG", payload: { editImg: editImg, email: user.email } });
                      setEditImgBool(false);
                    }}
                  >
                    <i className="bi bi-floppy2"></i>
                  </Button>
                </div>
              )}
              <Col xs={12} md={4} className="mt-3 p-0">
                <div className="mb-5 d-flex flex-column align-items-start">
                  <div
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      width: "150px",
                      height: "150px",
                      borderRadius: "75px",
                    }}
                    className="me-5 mb-3"
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
                    <span
                      style={{ position: "absolute", bottom: "20px", right: "25px", cursor: "pointer" }}
                      onClick={() => setEditImgBool(true)}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </span>
                  </div>
                  <Button variant="outline-light" className="d-none d-md-block" onClick={delAccount}>
                    Elimina Account
                  </Button>
                  <Button variant="outline-light" className="d-block d-md-none" onClick={delAccount}>
                    <i className="bi bi-trash3"></i>
                  </Button>
                </div>
              </Col>
              <Col xs={12} md={8} className="mt-0 mt-md-4">
                <div className="d-flex justify-content-between align-items-center">
                  {editNameBool ? (
                    <div className="d-flex w-100 align-items-center">
                      <input
                        className=" inputForm"
                        value={editName}
                        onChange={(e) => {
                          setEditName(e.target.value);
                        }}
                      />
                      <Button
                        variant="outline-light"
                        className=""
                        onClick={() => {
                          if (editName !== "" && editName !== undefined) {
                            dispatch({ type: "EDIT_NAME", payload: { editName: editName, email: user.email } });
                            setEditNameBool(false);
                          } else {
                            setGenericAlert(true);
                            setTimeout(() => {
                              setGenericAlert(false);
                            }, 2000);
                            setEditName(user.userName);
                          }
                        }}
                      >
                        <i className="bi bi-floppy2"></i>
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h4>Nome: {user.userName}</h4>
                      <span style={{ cursor: "pointer" }} onClick={() => setEditNameBool(true)}>
                        <i className="bi bi-pencil-square"></i>
                      </span>
                    </>
                  )}
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  {editEmailBool ? (
                    <div className="d-flex w-100 align-items-center">
                      <input
                        type="email"
                        className=" inputForm"
                        value={editEmail}
                        onChange={(e) => {
                          setEditEmail(e.target.value);
                        }}
                      />
                      <Button
                        variant="outline-light"
                        className=""
                        onClick={() => {
                          if (users.findIndex((elem) => elem.email === editEmail) === -1 || editEmail === user.email) {
                            if (editEmail.includes("@")) {
                              dispatch({ type: "EDIT_EMAIL", payload: { editEmail: editEmail, email: user.email } });
                              setEditEmailBool(false);
                            } else {
                              setEmailAlert2(true);
                              setTimeout(() => {
                                setEmailAlert2(false);
                                setEditEmail(user.email);
                              }, 2000);
                            }
                          } else {
                            setEmailAlert(true);
                            setTimeout(() => {
                              setEmailAlert(false);
                              setEditEmail(user.email);
                            }, 2000);
                          }
                        }}
                      >
                        <i className="bi bi-floppy2"></i>
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h4>Email: {user.email}</h4>
                      <span style={{ cursor: "pointer" }}>
                        <i className="bi bi-pencil-square" onClick={() => setEditEmailBool(true)}></i>
                      </span>
                    </>
                  )}
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  {editPasswordBool ? (
                    <div className="d-flex w-100 align-items-center">
                      <input
                        className=" inputForm"
                        value={editPassword}
                        onChange={(e) => {
                          setEditPassword(e.target.value);
                        }}
                      />
                      <Button
                        variant="outline-light"
                        className=""
                        onClick={() => {
                          if (editPassword !== "" && editPassword !== undefined) {
                            dispatch({
                              type: "EDIT_PASSWORD",
                              payload: { editPassword: editPassword, email: user.email },
                            });
                            setEditPasswordBool(false);
                          } else {
                            setGenericAlert(true);
                            setTimeout(() => {
                              setGenericAlert(false);
                            }, 2000);
                            setEditPassword(user.password);
                          }
                        }}
                      >
                        <i className="bi bi-floppy2"></i>
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h4>Password: ************</h4>
                      <span style={{ cursor: "pointer" }}>
                        <i className="bi bi-pencil-square" onClick={() => setEditPasswordBool(true)}></i>
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
