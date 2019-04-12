import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class LoginModal extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false,
        };

        this.handleShow = () => {
            this.setState({ show: true });
        };

        this.handleHide = () => {
            this.setState({ show: false });
        };
    }

    render() {
        return (
            <div>
                <button onClick={this.handleShow}>
                    Log In
            </button>

                <Modal 
                size="sm" 
                animation="true"
                show={this.state.show} 
                onHide={this.handleHide}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Log in or Register</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}