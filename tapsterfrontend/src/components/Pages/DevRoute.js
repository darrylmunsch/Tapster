import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
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
import { withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import '../../universal.css'

class DevRoute extends Component {

  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

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
                <NavItem>
                  <NavLink href="" onClick={this.onLogoutClick}>Log Out</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
          <div className="devHeader"> 
          {user.name.split(" ")[0]}
          <p >
            You are now logged in.{" "}
          </p>
        </div>      <p className="login_body">
          Add Drinks to DB
                </p>
      <PostRouteButton/>
      </div>
    );
  }
}

const PostRouteButton = withRouter(({ history }) => (
  <Button onClick={() => { history.push('/PostRoute')}}>
   Add a Drink
  </Button>
));


DevRoute.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(DevRoute);