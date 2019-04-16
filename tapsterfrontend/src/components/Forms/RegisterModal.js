import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import PropTypes from "prop-types";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import "./forms.css";



class RegisterModal extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false,
            validated: false,
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        };
    }
    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }
    handleShow = () => {
        this.setState({ show: true });
    };

    handleHide = () => {
        this.setState({ show: false });
    };

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    handleSubmit = e => {
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            this.setState({ validated: true });

            const newUser = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                password2: this.state.password2
            };
            e.preventDefault();
            this.props.registerUser(newUser, this.props.history);
        }
    };


    render() {
        const { validated } = this.state;
        const { errors } = this.state;
        //const {isInvalid} = this.state;
        return (
            <div>
                <button className="button_text" onClick={this.handleShow}>
                    Register
            </button>

                <Modal
                    size="sm"
                    animation="true"
                    show={this.state.show}
                    onHide={this.handleHide}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Register</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form
                            onSubmit={e => this.handleSubmit(e)}
                        >
                            <Form.Row>
                                <Form.Group as={Col} md="10" >
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        required
                                        id="name"
                                        type="text"
                                        placeholder="Username"
                                        onChange={this.onChange}
                                        value={this.state.name}
                                        error={errors.name}
                                        className={classnames("", {
                                            invalid: errors.name
                                        })}
                                    />
                                    <span className="text-danger">{errors.name}</span>
                                </Form.Group>
                                <Form.Group as={Col} md="10" >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        required
                                        id="email"
                                        type="text"
                                        placeholder="Email"
                                        onChange={this.onChange}
                                        value={this.state.email}
                                        error={errors.email}
                                    />
                                    <span className="text-danger">{errors.email}</span>
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

                                    />
                                    <span className="text-danger">{errors.password}</span>
                                </Form.Group>
                                <Form.Group as={Col} md="10" >
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control
                                        required
                                        id="password2"
                                        type="password"
                                        placeholder="Re-enter Password"
                                        onChange={this.onChange}
                                        value={this.state.password2}
                                        error={errors.password2}

                                    />
                                    <span className="text-danger">{errors.password2}</span>
                                </Form.Group>
                            </Form.Row>
                            <Form.Group>
                                <Form.Check
                                    required
                                    label="Agree to share Tapster with your friends!"
                                    feedback="You must agree before submitting."
                                />
                            </Form.Group>
                            <Button type="submit">Submit form</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

RegisterModal.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(RegisterModal));