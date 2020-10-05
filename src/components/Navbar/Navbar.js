import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Appbar() {
  return (
    <div>
 <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
 <Navbar.Brand href="#home">
      <img
        src="logo192.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
    <Nav>
    <Nav.Item>
      <Nav.Link href="/home">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="">Videos</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="">The Big 3</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="">Gallery</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="">Contact</Nav.Link>
    </Nav.Item>

    </Nav>

  </Navbar.Collapse>
</Navbar>
    </div>
  );
}

export default Appbar;
