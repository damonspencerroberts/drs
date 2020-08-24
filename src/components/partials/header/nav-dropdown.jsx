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
        title="Social" 
        id="basic-nav-dropdown">
            <NavDropdown.Item href="https://www.linkedin.com/in/damon-roberts1997/">LinkedIn</NavDropdown.Item>
            <NavDropdown.Item href="https://github.com/damonspencerroberts">GitHub</NavDropdown.Item>
            <NavDropdown.Item href="https://www.fiverr.com/share/zAYjx3">Fiverr Freelance</NavDropdown.Item>
      </NavDropdown>
        </Fragment>
    }
}
