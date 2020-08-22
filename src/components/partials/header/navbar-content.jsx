import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Drslogo from "../../styled-components/header/headlogo";
import _ from "lodash";

const navbar = () => 
<Navbar collapseOnSelect  expand="lg" className = "color-nav" variant = "light">
  <Navbar.Brand href="/">
    <img
        alt="drsicon"
        src="https://drs-signup-page.herokuapp.com/images/drsicon.png"
        width="40"
        height="40"
        className="d-inline-block align-top"
        />{' '}
        <Drslogo>
            DRS
        </Drslogo>
</Navbar.Brand>
<Nav className="ml-auto">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link href={"/" + _.lowerCase("education")}>Education</Nav.Link>
            <Nav.Link href={"/" + _.lowerCase("contact")}>Contact</Nav.Link>
        </Navbar.Collapse>
    </Nav>
  </Navbar>

export default navbar;