import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import _ from "lodash";

const navbar = () => 
<Navbar collapseOnSelect  expand="lg" className = "color-nav" variant = "light">
  <Navbar.Brand href="/">
    <img
        alt="drsicon"
        src="https://drs-signup-page.herokuapp.com/images/drsicon.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        />{' '}
        DRS
        </Navbar.Brand>
    <Nav className="ml-auto">
        <Nav.Link href={"/" + _.lowerCase("education")}>Education</Nav.Link>
        <Nav.Link href={"/" + _.lowerCase("contact")}>Contact</Nav.Link>
    </Nav>
  </Navbar>

export default navbar;