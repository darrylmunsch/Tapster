import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../../actions/authActions";
import classnames from "classnames";
import Button from 'react-bootstrap/Button';
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
import '../../../universal.css'


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
      isHidden: true
    };
  }
  state = {
    isOpen: false
  }


  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dev");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dev");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

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
        <div className="container center" >
          <div style={{ marginTop: "4rem" }} className="login_body">
            <div className="col s8 offset-s2">
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <p className="login_header">
                  <b>Login</b> below
              </p>
                <p className="grey-text text-darken-1">
                  Don't have an account? <Link to="/register">Register</Link>
                </p>
              </div>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="login_body input-field col s12">
                  <input
                    onChange={this.onChange}
                    value={this.state.email}
                    error={errors.email}
                    id="email"
                    type="email"
                    className={classnames("", { invalid: errors.email || errors.emailnotfound })}
                  />
                  <label htmlFor="email">Email</label>
                  <span className="text-danger">&nbsp; {errors.email} {errors.emailnotfound}</span>
                </div>
                <div className="login_body input-field col s12">
                  <input
                    onChange={this.onChange}
                    value={this.state.password}
                    error={errors.password}
                    id="password"
                    type="password"
                    className={classnames("", { invalid: errors.password || errors.passwordincorrect })}
                  />
                  <label htmlFor="password">Password</label>
                  <span className="text-danger">&nbsp; {errors.password}{errors.passwordincorrect}</span>
                </div>
                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                  <Button
                    type="submit"
                    className="regLog_btn"
                  >
                    Login
                </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);