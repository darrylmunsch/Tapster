import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import "./forms.css";
import Axios from 'axios';


class LoginModal extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false,
            validated: false,
            name: "",
            email: "",
            password: "",
            password2: ""

        };

        this.handleShow = () => {
            this.setState({ show: true });
        };

        this.handleHide = () => {
            this.setState({ show: false });
        };

        this.onChangeName = (event) => {
            this.setState({ name: event.target.value });
        };

        this.onChangeEmail = (event) => {
            this.setState({ email: event.target.value });
        };

        this.onChangePassword = (event) => {
            this.setState({ password: event.target.value });
        };

        this.onChangePassword2 = (event) => {
            this.setState({ password2: event.target.value });
        };

        this.handleSubmit = (event) => {
            const form = event.currentTarget;

            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                this.setState({ validated: true });
                console.log(
                    "email: " + this.state.email,
                    "password: " + this.state.password,
                );
                const loginUser = {
                    email: this.state.email,
                    password: this.state.password
                };
                console.log(loginUser);
                event.preventDefault();
                Axios.post('/api/users/login', loginUser)
                .then(res => { 
                    console.log(res)
                })
                .catch(error => {
                    console.log(error.response)
                });
            }
        };
    }

    render() {
        const { validated } = this.state;
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
                        <Form
                            noValidate
                            validated={validated}
                            onSubmit={e => this.handleSubmit(e)}
                        >
                            <Form.Row>
                                <Form.Group as={Col} md="10" controlId="validationCustom02">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Email"
                                        onChange={this.onChangeEmail}
                                        value={this.state.email}
                                    />
                                    <Form.Control.Feedback type="invalid">Email is invalid</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="10" controlId="validationCustom03">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        required
                                        type="password"
                                        placeholder="Password"
                                        onChange={this.onChangePassword}
                                        value={this.state.password}
                                    />
                                    <Form.Control.Feedback type="invalid">Password invalid</Form.Control.Feedback>
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

export default LoginModal