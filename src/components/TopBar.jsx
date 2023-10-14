import { Container, Nav, NavDropdown, NavLink, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const TopBar = () => {
  const user = useSelector((state) => state.usersData.currentUser);
  const dispatch = useDispatch();
  const loc = useLocation();

  const esci = () => {
    dispatch({ type: "ESCI", payload: {} });
  };

  return (
    <Navbar expand="sm" className="bg-body-tertiary" style={{ position: "sticky", width: "100%", top: "0px" }}>
      <Container fluid="lg">
        <Navbar.Brand href="#home">FloraStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" d-flex align-items-center justify-content-between w-100">
            <div className="d-flex">
              <Link to={"/"}>Home</Link>
              <Link href="#link">Link</Link>
            </div>
            <NavDropdown
              title={user.email && user.password ? user.userName : "User"}
              id="basic-nav-dropdown"
              className="ms-3"
              drop="down"
              align="end"
            >
              {user.email && user.password ? (
                <Link to={"/user"} style={{ fontSize: "15px" }} className="mt-1">
                  User
                </Link>
              ) : (
                <Link to={"/login"} style={{ fontSize: "15px" }} className="mt-1">
                  LogIn
                </Link>
              )}
              {loc.pathname !== "/user" && (
                <Link onClick={esci} style={{ fontSize: "15px" }} className="mt-3">
                  Esci
                </Link>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
