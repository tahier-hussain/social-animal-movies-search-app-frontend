import React from "react";
import { NavbarBrand, Navbar, Container } from "reactstrap";

function Header() {
  return (
    <Navbar style={{ backgroundColor: "#141414" }} dark expand="md" className="nav-bar-fixed-top fixed-top">
      <Container>
        <NavbarBrand href="/">Movies Search App</NavbarBrand>
      </Container>
    </Navbar>
  );
}

export default Header;
