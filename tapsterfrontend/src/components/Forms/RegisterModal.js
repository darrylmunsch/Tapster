import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import "./forms.css";
import Axios from 'axios';


class RegisterModal extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false,
            validated: false,
            isInvalid: true,
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
            this.setState({name: event.target.value});
        };

        this.onChangeEmail = (event) => {
            this.setState({email: event.target.value});
        };

        this.onChangePassword = (event) => {
            this.setState({password: event.target.value});
        };

        this.onChangePassword2 = (event, isInvalid) => {
            this.setState({password2: event.target.value});
        };

        this.handleSubmit = (event) => {
            const form = event.currentTarget;

            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                this.setState({ validated: true });
            
                const newUser = {
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password,
                    password2: this.state.password2
                };
                console.log(newUser);
                event.preventDefault();
                Axios.post('/api/users/register', newUser)
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
                            noValidate
                            validated={validated}
                            onSubmit={e => this.handleSubmit(e)}
                        >
                            <Form.Row>
                                <Form.Group as={Col} md="10" controlId="validationCustom01">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Username"
                                        onChange={this.onChangeName}
                                        value={this.state.name}
                                    />
                                    <Form.Control.Feedback>Valid</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Username is invalid</Form.Control.Feedback>
                                </Form.Group>
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
                                    <Form.Control.Feedback type="invalid">Password must contain 6 - 30 characters</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="10" controlId="validationCustom04">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control
                                        required
                                        type="password"
                                        placeholder="Re-enter Password"
                                        onChange={this.onChangePassword2}
                                        value={this.state.password2}
                        
                                    />
                                    <Form.Control.Feedback type="invalid">Passwords do not match</Form.Control.Feedback>
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

export default RegisterModal