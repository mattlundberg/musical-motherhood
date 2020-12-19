import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = ({ activeKey, onNavClick }) => {
  const fixedTop = {
    position: "sticky",
    top: 0,
  };
  return (
    <div style={fixedTop}>
      <nav>
        <Navbar bg="primary" expand="lg" variant="dark">
          <Navbar.Brand href="/">Musical Motherhood</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" activeKey={activeKey}>
              <Nav.Item>
                <Nav.Link
                  eventKey="Home"
                  onClick={() => {
                    onNavClick("Home");
                  }}
                >
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="Contact"
                  onClick={() => {
                    onNavClick("Contact");
                  }}
                >
                  Contact
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="About"
                  onClick={() => {
                    onNavClick("About");
                  }}
                >
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="Shop"
                  onClick={() => {
                    onNavClick("Shop");
                  }}
                >
                  Shop
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="Videos"
                  onClick={() => {
                    onNavClick("Videos");
                  }}
                >
                  Videos
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </nav>
    </div>
  );
};

export default Navigation;