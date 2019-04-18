import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  Container
} from 'reactstrap';


import '../../universal.css';

class Landing extends Component {
  state = {
    isOpen: false
  }


  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    return (
      <div>
        <Navbar color="secondary" dark expand="sm">
          <Container>
            <NavbarBrand href="/">TAPSTER</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem >
                  <NavLink href="/">To Home</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>

        <div style={{ height: "75vh" }} className="container valign-wrapper">
          <div className="row">
            <div className="col s12 center-align">
              <br />
              <div className="col s6">
                <Link
                  to="/register"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="regLog_btn"
                >
                  Register
              </Link>
              </div>
              <br />
              <div className="col s6">
                <Link
                  to="/login"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="regLog_btn "
                >
                  Log In
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;