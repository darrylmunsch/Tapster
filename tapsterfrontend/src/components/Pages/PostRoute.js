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
import Button from 'react-bootstrap/Button';
import '../../universal.css'

class PostRoute extends Component {

    state = {
        isOpen: false,
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
        e.preventDefault();
    }



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
                <div className="container" >
                    <h1>Add a new drink to the Database</h1>
                    <form noValidate onSubmit={this.onSubmit}>
                        <div className="login_body input-field col s12">
                            <input
                                onChange={this.onChange}
                                value={this.strDrink}
                                id="strDrink"
                                type="text"
                            />
                            <label htmlFor="strDrink">Name of Drink</label>
                        </div>
                        <div className="login_body input-field col s12">
                            <input
                                onChange={this.onChange}
                                value={this.strAlcoholic}
                                id="strAlcoholic"
                                type="text"
                            />
                            <label htmlFor="strAlcoholic">Name of Drink</label>
                        </div>
                        <div className="login_body input-field col s12">
                            <input
                                onChange={this.onChange}
                                value={this.strCategory}
                                id="strCategory"
                                type="text"
                            />
                            <label htmlFor="strCategory">Name of Drink</label>
                        </div>
                        <div className="login_body input-field col s12">
                            <input
                                onChange={this.onChange}
                                value={this.strDrink}
                                id="drinkName"
                                type="text"
                            />
                            <label htmlFor="drinkName">Name of Drink</label>
                        </div>
                        <div className="login_body input-field col s12">
                            <input
                                onChange={this.onChange}
                                value={this.strDrink}
                                id="drinkName"
                                type="text"
                            />
                            <label htmlFor="drinkName">Name of Drink</label>
                        </div>
                        <div className="login_body input-field col s12">
                            <input
                                onChange={this.onChange}
                                value={this.strDrink}
                                id="drinkName"
                                type="text"
                            />
                            <label htmlFor="drinkName">Name of Drink</label>
                        </div>
                        <div className="login_body input-field col s12">
                            <input
                                onChange={this.onChange}
                                value={this.strDrink}
                                id="drinkName"
                                type="text"
                            />
                            <label htmlFor="drinkName">Name of Drink</label>
                        </div>
                        <div className="login_body input-field col s12">
                            <input
                                onChange={this.onChange}
                                value={this.strDrink}
                                id="drinkName"
                                type="text"
                            />
                            <label htmlFor="drinkName">Name of Drink</label>
                        </div>
                        <div className="login_body input-field col s12">
                            <input
                                onChange={this.onChange}
                                value={this.strDrink}
                                id="drinkName"
                                type="text"
                            />
                            <label htmlFor="drinkName">Name of Drink</label>
                        </div>
                        <div className="login_body input-field col s12">
                            <input
                                onChange={this.onChange}
                                value={this.strDrink}
                                id="drinkName"
                                type="text"
                            />
                            <label htmlFor="drinkName">Name of Drink</label>
                        </div>
                        <div className="login_body input-field col s12">
                            <input
                                onChange={this.onChange}
                                value={this.strDrink}
                                id="drinkName"
                                type="text"
                            />
                            <label htmlFor="drinkName">Name of Drink</label>
                        </div>
                        <div className="login_body input-field col s12">
                            <input
                                onChange={this.onChange}
                                value={this.strDrink}
                                id="drinkName"
                                type="text"
                            />
                            <label htmlFor="drinkName">Name of Drink</label>
                        </div>
                        <div className="login_body input-field col s12">
                            <input
                                onChange={this.onChange}
                                value={this.strDrink}
                                id="drinkName"
                                type="text"
                            />
                            <label htmlFor="drinkName">Name of Drink</label>
                        </div>
                        <div className="login_body input-field col s12">
                            <input
                                onChange={this.onChange}
                                value={this.strDrink}
                                id="drinkName"
                                type="text"
                            />
                            <label htmlFor="drinkName">Name of Drink</label>
                        </div>
                    </form>
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