import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export class NavigationBar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Simple webapp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/lyrics">LyricsFinder</Nav.Link>
              <Nav.Link href="/notes">Notes</Nav.Link>
            </Nav>
            <Navbar.Text>
              Signed in as: <a href="#login"> {this.props.pseudo} </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
export default NavigationBar;
