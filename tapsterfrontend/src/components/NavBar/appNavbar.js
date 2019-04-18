/* https://reactstrap.github.io/components/navbar/ */
import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';





class AppNavbar extends Component {
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
        <style>
          @import url("https://fonts.googleapis.com/css?family=Megrim");
          @import url("https://fonts.googleapis.com/css?family=Oswald");
      </style>
        <Navbar color="secondary" dark expand="sm">
          <Container>
            <NavbarBrand href="/">TAPSTER</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem >
                  <LandingButton />
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
 const LandingButton = withRouter(({ history }) => (
   <Button onClick={() => { history.push('/Landing')}}>
    Log In / Register
   </Button>
 ));

 

export default AppNavbar;
