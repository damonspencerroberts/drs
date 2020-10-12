import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import _ from "lodash";
import NavDrop from "./nav-dropdown";
import drsicon from "../../img/drsicon.png";
import {withRouter} from "react-router-dom";


const navbar = (props) => {
	const path = props.location.pathname;
	const classN = "active-class";
  return <Navbar  expand="lg" className = "color-nav" variant = "light">
		<Navbar.Brand href="/">
			<img
				alt="drsicon"
				src= {drsicon}
				width="90"
				height="90"
				className="d-inline-block align-top"
				/>
		</Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="ml-auto">
				<Nav.Link className = {path === "/" ? classN : null} href="/"><i className="fas fa-home"></i> Home</Nav.Link>
				<Nav.Link className = {path === "/education" ? classN : null} href={"/" + _.lowerCase("education")}><i className="fas fa-university"></i> Education</Nav.Link>
				<Nav.Link className = {path === "/contact" ? classN : null} href={"/" + _.lowerCase("contact")}><i className="fas fa-envelope"></i> Contact</Nav.Link>
				<NavDrop />
			</Nav>
		</Navbar.Collapse>
    </Navbar>
}
	

export default withRouter(navbar);