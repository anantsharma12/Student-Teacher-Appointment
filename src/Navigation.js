import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navigation.css";

function Navigation() {
  return (
    <>
      <Navbar
        style={{
          backgroundColor: "#333",
          height: "4.5vh",
          borderBottom: "solid black",
          borderWidth: "1px",
        }}
        expand="lg"
        collapseOnSelect
      >
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              active
              style={{ color: "white", textDecoration: "none" }}
              href="/login"
              className="navlink"
            >
              Admin
            </Nav.Link>
            <Nav.Link
              active
              style={{
                color: "white",
                marginLeft: "1em",
                textDecoration: "none",
              }}
              href="/tlogin"
              className="navlink"
            >
              Teacher
            </Nav.Link>
            <Nav.Link
              active
              style={{
                color: "white",
                marginLeft: "1em",
                textDecoration: "none",
              }}
              href="/slogin"
              className="mr-3 navlink"
            >
              Student
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;
