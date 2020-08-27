import React, {Fragment, Component} from "react";
import {NavDropdown} from "react-bootstrap";

export default class NavDrop extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            Hovered: false,
            Clicked: false
        }
        
        this.changeHover = this.changeHover.bind(this);
        this.changeClicked = this.changeClicked.bind(this);
    }

    changeHover() {
        this.setState({Hovered: !this.state.Hovered});
    }

    changeClicked() {
        this.setState({Clicked: !this.state.Clicked})
    }

    render() {
        console.log(this.state.Hovered);
        return <Fragment>
            <NavDropdown 
            onMouseEnter = {this.changeHover}
            onMouseLeave = {this.changeHover}
            onToggle = {this.changeClicked}
            show= {this.state.Hovered || this.state.Clicked}
            title= {<span><i className="fas fa-user"></i> Social</span>}
            id="basic-nav-dropdown">
                <NavDropdown.Item href="https://www.linkedin.com/in/damon-roberts1997/" target="_blank"><i className="fab fa-linkedin"></i> LinkedIn</NavDropdown.Item>
                <NavDropdown.Item href="https://github.com/damonspencerroberts" target="_blank"><i className="fab fa-github"></i> GitHub</NavDropdown.Item>
                <NavDropdown.Item href="https://www.fiverr.com/share/zAYjx3" target="_blank"><i className="fas fa-code"></i> Fiverr Freelance</NavDropdown.Item>
            </NavDropdown>
        </Fragment>
    }
}


