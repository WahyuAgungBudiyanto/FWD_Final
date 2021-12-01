import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <div>
      <Navbar sticky="top" collapseOnSelect expand="md" style={{ backgroundColor: "#202020" }} variant="dark">
        <Container>
          <Link to="/">
            <img src="/marvel.png" width="80" height="40" className="d-inline-block align-top" alt="React Bootstrap logo" />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              {/* <Link to="/" active>
                Home
              </Link>
              <Link to="/about">About</Link> */}
            </Nav>
            <Nav>
              <Nav.Link tp="" target="_blank" active>
                <strong>Github Repository</strong>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
