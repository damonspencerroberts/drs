import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import _ from "lodash";
import NavDrop from "./nav-dropdown";
import drsicon from "../../img/drsicon.png";

const navbar = () => 
<Navbar collapseOnSelect  expand="lg" className = "color-nav" variant = "light">
  <Navbar.Brand href="/">
    <img
        alt="drsicon"
        src= {drsicon}
        width="80"
        height="80"
        className="d-inline-block align-top"
        />{' '}
</Navbar.Brand>
<Nav className="ml-auto">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link href="/"><i className="fas fa-home"></i> Home</Nav.Link>
            <Nav.Link href={"/" + _.lowerCase("education")}><i className="fas fa-university"></i> Education</Nav.Link>
            <Nav.Link href={"/" + _.lowerCase("contact")}><i className="fas fa-envelope"></i> Contact</Nav.Link>
            <NavDrop />
        </Navbar.Collapse>
    </Nav>
  </Navbar>

export default navbar;