import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import "./forms.css";



class LoginModal extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false,
            validated: false,
            email: "",
            password: "",
            errors: {}

        };
    };
    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/dashboard");
        }
      }


      /*componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
          this.props.history.push("/dashboard");
        }
    
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
      }*/

    handleShow = () => {
        this.setState({ show: true });
    };

    handleHide = () => {
        this.setState({ show: false });
    };

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    handleSubmit = (e) => {

        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        console.log(userData);

        this.props.loginUser(userData);
    };


    render() {
        const { errors } = this.state;
        
        return (
            <div>
                <button className="button_text" onClick={this.handleShow}>
                    Log In
            </button>

                <Modal
                    size="sm"
                    animation="true"
                    show={this.state.show}
                    onHide={this.handleHide}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Log In</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Link to="/" className="btn-flat waves-effect">
               Back to home
            </Link>
                        <Form
                            noValidate
                            onSubmit={e => this.handleSubmit(e)}
                        >
                            <Form.Row>
                                <Form.Group as={Col} md="10" >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        id="email"
                                        type="text"
                                        placeholder="Email"
                                        onChange={this.onChange}
                                        value={this.state.email}
                                        error={this.email}
                                        className={classnames("", {invalid: errors.email || errors.emailnotfound})}
                                    />
                                   <span className="red-text">{errors.email} {errors.emailnotfound}</span>
                                </Form.Group>
                                <Form.Group as={Col} md="10" >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        required
                                        id="password"
                                        type="password"
                                        placeholder="Password"
                                        onChange={this.onChange}
                                        value={this.state.password}
                                        error={errors.password}
                                        className={classnames("", { invalid: errors.password || errors.passwordincorrect})}
                                    />
                                    <span className="red-text">{errors.password}{errors.passwordincorrect}</span>
                                </Form.Group>
                            </Form.Row>
                            <Button type="submit">Submit form</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

LoginModal.propTypes = {
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
)(LoginModal);