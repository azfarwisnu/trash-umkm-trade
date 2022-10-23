import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

class HeaderComponent extends React.Component {
  render() {
    return (
      <>
        <div className="box-head mb-4">
          <Navbar expand="lg" bg="muted" className="mt-2 container">
            <Container fluid>
              <Navbar.Brand href="/"><strong><span className="color-active">Trash</span>Trade</strong></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                ></Nav>
                <Nav.Link className="mx-2 color-active" href="/">Home</Nav.Link>
                <Nav.Link className="mx-2" href="/trade">Trade</Nav.Link>
                <Nav.Link className="mx-2">Umkm</Nav.Link>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </>
    );
  }
}

export default HeaderComponent;
