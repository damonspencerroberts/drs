import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import _ from "lodash";
import NavDrop from "./nav-dropdown";
import drsicon from "../../img/drsicon.png";

const navbar = () => 
  <Navbar  expand="lg" className = "color-nav" variant = "light">
		<Navbar.Brand href="/">
			<img
				alt="drsicon"
				src= {drsicon}
				width="70"
				height="70"
				className="d-inline-block align-top"
				/>
		</Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="ml-auto">
				<Nav.Link href="/"><i className="fas fa-home"></i> Home</Nav.Link>
				<Nav.Link href={"/" + _.lowerCase("education")}><i className="fas fa-university"></i> Education</Nav.Link>
				<Nav.Link href={"/" + _.lowerCase("contact")}><i className="fas fa-envelope"></i> Contact</Nav.Link>
				<NavDrop />
			</Nav>
		</Navbar.Collapse>
    </Navbar>

export default navbar;