/* https://reactstrap.github.io/components/navbar/ */
import React, {Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from 'reactstrap';

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
    return(
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
                
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
    );
  }
}


export default AppNavbar;
