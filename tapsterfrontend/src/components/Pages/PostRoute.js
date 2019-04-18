import React, { Component } from 'react';
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
import UserFav from '../userFav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../universal.css'

class PostRoute extends Component {

    state = {
        isOpen: false,
        validated: false,
        strdrink: "",
        strAlcoholic: "",
        strCategory: "",
        strDrinkThumb: "", 
        strGlass: "",
        strIngredient1: "",
        strIngredient2: "",
        strIngredient3: "",
        strIngredient4: "",
        strIngredient5: "",
        strIngredient6: "",
        strIngredient7: "",
        strIngredient8: "",
        strIngredient9: "",
        strIngredient10: "",
        strIngredient11: "",
        strIngredient12: "",
        strMeasure1: "",
        strMeasure2: "",
        strMeasure3: "",
        strMeasure4: "",
        strMeasure5: "",
        strMeasure6: "",
        strMeasure7: "",
        strMeasure8: "",
        strMeasure9: "",
        strMeasure10: "",
        strMeasure11: "",
        strMeasure12: "",
        strInstructions: "",
        strIngList: [""]
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };

    onSubmit = e => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        this.setState({ validated: true });
    }

    // + " " after strMeasure!!

    render() {
        const { user } = this.props.auth;
        return (
            <div>
                <Navbar color="secondary" dark expand="sm">
                    <Container>
                        <NavbarBrand >{user.name.split(" ")[0]}</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem >
                                    <NavLink href="/">To Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/dev" >Dev Dashboard</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
                <UserFav/>
                <div className="container" >
                    <h1>Add a new drink to the Database</h1>

                </div>
            </div>
        )
    }
}

PostRoute.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(PostRoute);


/**
 *                     <Form
                        noValidate
                        validated={validated}
                        onSubmit={e => this.onSubmit(e)}
                    >
                        <Form.Row>
                            <Form.Group as={Col} md="4">
                                <Form.Label>Drink Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    id="strDrink"
                                    placeholder="Drink Name"
                                />
                            </Form.Group>
                        </Form.Row>
                    </Form>
 */